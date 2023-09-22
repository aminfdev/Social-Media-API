import {
  getComments,
  createComment,
  deleteComment,
} from "../../controllers/commentsController";
import { authenticate } from "../../middlewares/authMiddleware";
import express from "express";

const router = express.Router();

router.get("/by-post-id/:postId", getComments);
router.post("/by-post-id/:postId", authenticate, createComment);
router.delete("/:commentId", authenticate, deleteComment);

export { router as commentsRouter };
