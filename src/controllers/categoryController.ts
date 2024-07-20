import { Request, Response } from "express";
import { CategoryService } from "../services/categoryService";

export class CategoryController {
  async create(req: Request, res: Response) {
    const service = new CategoryService();
    const result = await service.create();

    return res.status(201).json(result);
  }
}
