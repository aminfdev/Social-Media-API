import {
  getPosts,
  createPost,
  getPostById,
  getPostsByUserId,
  updatePost,
  deletePost,
} from "../../controllers/postsController";
import { authenticate } from "../../middlewares/authMiddleware";
import express from "express";

const router = express.Router();

router.get("/", getPosts);
router.get("/:postId", getPostById);
router.get("/by-user-id/:userId", getPostsByUserId);
router.post("/", authenticate, createPost);
router.put("/:postId", authenticate, updatePost);
router.delete("/:postId", authenticate, deletePost);

export { router as postsRouter };
