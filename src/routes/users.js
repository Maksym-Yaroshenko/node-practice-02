import { Router } from "express";
import {
  createUserController,
  fullNameUsers,
  oneNameUser,
} from "../controllers/user.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
const router = Router();

router.get("/users", ctrlWrapper(fullNameUsers));

router.get("/users/:userId", ctrlWrapper(oneNameUser));

router.post("/users", ctrlWrapper(createUserController));

export default router;
