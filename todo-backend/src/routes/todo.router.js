import { Router } from "express";

import todoController from "../controllers/todo.controller.js";

const todoRouter = new Router();

/* 
    POST /api/todo/add

    Adds new todo
*/
todoRouter.post("/add", todoController.add);

/*
    GET /api/todo/get

    Fetches all todos of user
*/
todoRouter.get("/get/:userId", todoController.getAll);

/*
    PUT /api/todo/edit

    Edits todo
*/
todoRouter.put("/edit", todoController.edit);

/*
    DELETE /api/todo/delete

    Deletes todo
*/
todoRouter.delete("/delete", todoController.delete);

export default todoRouter;
