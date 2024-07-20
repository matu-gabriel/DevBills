import { Router } from "express";
import { baseRouter } from "./baseRouter";
import { categoryRouter } from "./categoryRouter";

export const routes = Router();

routes.use("/", baseRouter);
routes.use("/categories", categoryRouter);
