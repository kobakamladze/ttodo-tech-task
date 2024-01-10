import { Router } from "express";

import userController from "../controllers/user.controller.js";

const userRouter = new Router();

/* 
    POST /api/user/auth

    Login or add new user
*/
userRouter.post("/auth", userController.auth);

export default userRouter;
