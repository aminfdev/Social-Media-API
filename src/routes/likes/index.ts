import { authenticate } from "../../middlewares/authMiddleware";
import { like } from "../../controllers/likesController";
import express from "express";

const router = express.Router();

router.post("/", authenticate, like);

export { router as likesRouter };
