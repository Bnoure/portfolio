import { REACTION } from '@/constants'
import React from 'react'
import { useDebounce } from 'react-use'
import useSWR, { SWRConfiguration } from 'swr'

const API_URL = `/projets/api/reactions`


type MetricsPayload = {
  likes: string,
  isLiked: boolean,
  views: string,
  isViewed: boolean,
}

async function getPostReactions(slug: string): Promise<MetricsPayload> {
	const res = await fetch(API_URL + `/${slug}`)
	if (!res.ok) {
		throw new Error('An error occurred while fetching the data.')
	}
	return res.json()
}

async function updatePostReactions(slug: string, reactionTypes: string[]): Promise<MetricsPayload> {
  try {
      const res = await fetch((API_URL + `/${slug}`), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reactionTypes),
      });

      if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
      }

      return await res.json();
  } catch (error) {
      console.error("An error occurred while posting the data:", error);
      throw new Error('Failed to post data');
  }
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
            likes: data.likes,
            views: (BigInt(data.views) + BigInt(1)).toString(),
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
            likes: (BigInt(data.likes) + BigInt(1)).toString(),
            views: data.views,
            isLiked: true,
            isViewed: data.isViewed,
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
        likes: data?.likes,
        isLiked: data?.isLiked,
        isLoading: !error && !data,
        isError: !!error,
        reaction,
    }
}
