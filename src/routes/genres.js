import { Router } from "express";
import GenresController from "../controllers/genres";


const genreRouter = Router();
const genreController = new GenresController();

genreRouter.get("/", genreController.getAllGenres)
genreRouter.post("/", genreController.getGenresDetail)
genreRouter.get("/:id", genreController.createGenres)
genreRouter.put("/:id", genreController.updateGenres)
genreRouter.delete("/:id", genreController.deleteGenres)

export default genreRouter