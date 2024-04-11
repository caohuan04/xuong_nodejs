import { Router } from "express";
import GenresController from "../controllers/genres";


const genreRouter = Router();
const genreController = new GenresController();

genreRouter.get("/", genreController.getAllGenres)
genreRouter.post("/", checkPermision, genreController.createGenres)
genreRouter.get("/:id", genreController.getGenresDetail)
genreRouter.put("/:id", checkPermision, genreController.updateGenres)
genreRouter.delete("/:id", checkPermision, genreController.deleteGenres)

export default genreRouter