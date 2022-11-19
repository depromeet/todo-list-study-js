import { Router } from "express";
import todoRouter from "./todo/todo.route.js";

const router = Router({ mergeParams: true });

router.use("/todo", todoRouter);

router.get("/", (req, res) => {
  console.log("!#!@#@!#!@#");
  res.json({ message: "Hello Todo List Study" });
});

export default router;
