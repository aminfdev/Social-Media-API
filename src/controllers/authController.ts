import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../models";

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function register(req: Request, res: Response) {
  const user = req.body;
  try {
    const existingUser = await db.Users.findOne({
      where: { email: user.email },
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "A user with this email is already exist." });
    } else {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await db.Users.create({
        id: uuidv4(),
        first_name: capitalizeFirstLetter(user.first_name.trim()),
        last_name: capitalizeFirstLetter(user.last_name.trim()),
        email: user.email,
        password: hashedPassword,
      });
      return res
        .status(200)
        .json({ message: "New user registered succesfuly." });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something happened wrong. Try again." });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const user = await db.Users.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(404).json({ message: "User not exist." });
    } else {
      const passwordValidation = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordValidation) {
        return res
          .status(400)
          .json({ message: "Email or password not matched." });
      } else {
        const accessToken = jwt.sign(
          { id: user.id },
          process.env.JWT_SECRET as string
        );
        return res.status(200).json({
          accessToken: accessToken,
          message: "Logged in successfuly.",
        });
      }
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something happened wrong. Try again." });
  }
}
