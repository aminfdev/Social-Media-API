import { getUser } from "../../controllers/usersController";
import express from "express";

const router = express.Router();

router.get("/:userId", getUser);

export { router as usersRouter };
