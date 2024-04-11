import { Router } from "express";
import CategoriesController from "../controllers/categories";


const categoriesRouter = Router();
const categoriesController = new CategoriesController();

categoriesRouter.get("/", categoriesController.getAllCategories)
categoriesRouter.post("/", checkPermision, categoriesController.createCategories)
categoriesRouter.get("/:id", categoriesController.getCategoriesDetail)
categoriesRouter.put("/:id", checkPermision, categoriesController.updateCategories)
categoriesRouter.delete("/:id", checkPermision, categoriesController.deleteCategories)

export default categoriesRouter