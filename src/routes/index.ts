import express from "express";
import { authRouter } from "./auth";
import { postsRouter } from "./posts";
import { likesRouter } from "./likes";
import { commentsRouter } from "./comments";
import { usersRouter } from "./users";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/posts", postsRouter);
router.use("/likes", likesRouter);
router.use("/comments", commentsRouter);

export { router as apiRouter };
