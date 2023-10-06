import { Router } from "express";
import {
  userLoginController,
  userRegisterController,
} from "../controllers/user.controller";

const userRouter = Router();

// POST : api/users/register
userRouter.post("/register", userRegisterController);

// POST : api/users/login
userRouter.post("/login", userLoginController);

export default userRouter;
