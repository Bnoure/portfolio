import { NextApiRequest, NextApiResponse } from "next";
import { createHash } from "crypto";
import  prisma  from "@/lib/prisma";
import { REACTION } from "@/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const ipAddress = req.headers["x-forwarded-for"] || '0.0.0.0';
    const slug = req.query.slug as string;
    const currentUserId = createHash('md5').update(ipAddress + process.env.IP_ADDRESS_SALT!, 'utf8').digest('hex');

    const sessionId = slug + '---' + currentUserId;
    if (!slug) {
      return res.status(400).json({ message: 'Slug is required.' });
    }

    const { method } = req;

    if (method === 'POST') {
      const types = req.body;
      const likesCount = types.filter((type: string) => type === REACTION.like).length;

      const [newOrUpdatedReaction, user] = await Promise.all([
        prisma.reactions.upsert({
          where: { projectSlug: slug },
          create: {
            projectSlug: slug,
            likes: likesCount,
          },
          update: {
            likes: {
              increment: likesCount,
            },
          },
        }),
        prisma.session.upsert({
          where: { id: sessionId },
          create: {
            id: sessionId,
            isLiked: likesCount > 0,

          },
          update: {
            isLiked: likesCount > 0,
          },
        }),
      ]);

      return res.status(200).json({
        likes: newOrUpdatedReaction.likes.toString(),
        isLiked: user.isLiked,
      });
    }



  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}
