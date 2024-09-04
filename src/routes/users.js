import { Router } from "express";
import {
  createUserController,
  fullNameUsers,
  oneNameUser,
} from "../controllers/user.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../middlewares/validateBody.js";
import { createUserSchema } from "../validation/users.js";
import { isValidId } from "../middlewares/isValidId.js";
const router = Router();

router.get("/users", ctrlWrapper(fullNameUsers));

router.get("/users/:userId", isValidId, ctrlWrapper(oneNameUser));

router.post(
  "/users",
  validateBody(createUserSchema),
  ctrlWrapper(createUserController)
);

export default router;
