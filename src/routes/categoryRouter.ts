import { Router } from "express";
import { CategoryController } from "../controllers/categoryController";

export const categoryRouter = Router();

const controller = new CategoryController();

categoryRouter.post("/", controller.create);
