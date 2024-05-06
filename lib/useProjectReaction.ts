import { REACTION } from '@/constants'
import React from 'react'
import { useDebounce } from 'react-use'
import useSWR, { SWRConfiguration } from 'swr'
import prisma  from './prisma' // Import your Prisma client

const API_URL = `/api/reactions`

type MetricsPayload = {
    views: string
    likes: string,
    isViewed: boolean,
    isLiked: boolean,
}

async function getPostReactions(slug: string): Promise<MetricsPayload> {
    const views = await prisma.views.count({
        where: {
            projectSlug: slug,
        },
    })

    const likes = await prisma.reactions.count({
        where: {
            projectSlug: slug,
        },
    })

    return {
        views: views.toString(),
        likes: likes.toString(),
        isViewed: views > 0,
        isLiked: likes > 0,
    }
}

async function updatePostReactions(
    slug: string,
    reactionTypes: string[]
): Promise<MetricsPayload> {
    for (const reactionType of reactionTypes) {
        if (reactionType === REACTION.view) {
            await prisma.views.create({
                data: {
                    projectSlug: slug,
                },
            })
        } else if (reactionType === REACTION.like) {
            await prisma.reactions.create({
                data: {
                    projectSlug: slug,
                },
            })
        }
    }

    return getPostReactions(slug)
}

export const usePostReactions = (slug: string, config?: SWRConfiguration) => {
    const { data, error, mutate } = useSWR(
        [API_URL, slug],
        () => getPostReactions(slug),
        {
            dedupingInterval: 60000,
            ...config,
        }
    )

    const [batchedReactions, setBatchedReactions] = React.useState<string[]>([])

    const reaction = (type: string) => {
        // Prevent the user from reacting again
        if (
            !data
            || (type === REACTION.like && data.isLiked)
            || (type === REACTION.view && data.isViewed)
        ) {
            return
        }

        // update the local swr cache so reactions updates immediately for the user
        if (type === REACTION.view) {
            setBatchedReactions((prevReactions) => [...prevReactions, REACTION.view])
            mutate(
                {
                    views: (BigInt(data.views) + BigInt(1)).toString(),
                    likes: data.likes,
                    isViewed: true,
                    isLiked: data.isLiked,
                },
                false
            )
        }
        if (type === REACTION.like) {
            setBatchedReactions((prevReactions) => [...prevReactions, REACTION.like])
            mutate(
                {
                    views: data.views,
                    likes: (BigInt(data.likes) + BigInt(1)).toString(),
                    isViewed: data.isViewed,
                    isLiked: true,
                },
                false
            )
        }
    }

    useDebounce(
        () => {
            if (batchedReactions.length === 0) return

            const reactionsCopy = [...batchedReactions]
            // Clear the batchedReactions array
            setBatchedReactions([])

            // update the database and use the data updatePostReactions returns to update
            // the local cache with database data
            mutate(updatePostReactions(slug, reactionsCopy))
        },
        1000,
        [batchedReactions]
    )

    return {
        views: data?.views,
        likes: data?.likes,
        isViewed: data?.isViewed,
        isLiked: data?.isLiked,
        isLoading: !error && !data,
        isError: !!error,
        reaction,
    }
}
