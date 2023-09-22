import { Request, Response } from "express";
import db from "../models";

export async function getUser(req: Request, res: Response) {
  const { userId } = req.params;
  try {
    const user = await db.Users.findByPk(userId, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something happened wrong. Try again." });
  }
}
