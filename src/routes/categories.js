import { Router } from "express";
import CategoriesController from "../controllers/categories";


const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.get("/", categoriesController.getAllCategories)
categoriesRouter.post("/", categoriesController.getCategoriesDetail)
categoriesRouter.get("/:id", categoriesController.createCategories)
categoriesRouter.put("/:id", categoriesController.updateCategories)
categoriesRouter.delete("/:id", categoriesController.deleteCategories)

export default categoriesRouter