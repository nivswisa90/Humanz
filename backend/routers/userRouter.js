const { Router } = require("express");
const { userHandler } = require("../Api/userHandler");
const userRouter = new Router();

userRouter.get("/", userHandler.getAllUsers);
userRouter.get("/:name", userHandler.getUserByName);
userRouter.post("/", userHandler.addUser);
userRouter.delete("/:name", userHandler.deleteUser);

module.exports = { userRouter };
