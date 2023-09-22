import { Request, Response } from "express";
import db from "../models";

export async function getComments(req: Request, res: Response) {
  const { postId } = req.params;
  try {
    const post = await db.Posts.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    } else {
      const comments = await db.Comments.findAll({ where: { PostId: postId } });
      return res.status(200).json(comments);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something happened wrong. Try again." });
  }
}

export async function createComment(req: Request, res: Response) {
  const { postId } = req.params;
  const { body } = req.body;
  const userId = req.user.id;
  try {
    const post = await db.Posts.findByPk(postId);
    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    } else {
      await db.Comments.create({ body: body, PostId: postId, UserId: userId });
      return res.status(200).json({ message: "Successfuly commented." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something happened wrong. Try again." });
  }
}

export async function deleteComment(req: Request, res: Response) {
  const { commentId } = req.params;
  const userId = req.user.id;
  try {
    const comment = await db.Comments.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found." });
    } else {
      if (comment.UserId !== userId) {
        return res.status(403).json({
          message: "Access denied. Only author of this comment can delete it.",
        });
      } else {
        await db.Comments.destroy({
          where: { id: commentId, UserId: userId },
        });
        return res.status(200).json({
          message: "Successfuly deleted the comment.",
        });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something happened wrong. Try again." });
  }
}
