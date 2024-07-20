import { Router } from "express";
import packageJson from "../../package.json";

export const baseRouter = Router();

baseRouter.get("/", (_, res) => {
  const { version, name, author, description } = packageJson;
  res.status(200).json({ description, version, name, author });
});
