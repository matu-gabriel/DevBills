import { Router } from "express";
import { baseRouter } from "./baseRouter";

export const routes = Router();

routes.use("/", baseRouter);
