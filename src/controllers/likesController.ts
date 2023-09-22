import { Request, Response } from "express";
import db from "../models";

export async function like(req: Request, res: Response) {
  const { postId } = req.body;
  const userId = req.user.id;
  try {
    const post = await db.Posts.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    } else {
      const found = await db.Likes.findOne({
        where: {
          PostId: postId,
          UserId: userId,
        },
      });
      if (!found) {
        await db.Likes.create({
          PostId: postId,
          UserId: userId,
        });
        return res.status(200).json({ message: "Successfuly liked the post" });
      } else {
        await db.Likes.destroy({
          where: {
            PostId: postId,
            UserId: userId,
          },
        });
        return res
          .status(200)
          .json({ message: "Successfuly unliked the post" });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something happened wrong. Try again." });
  }
}
