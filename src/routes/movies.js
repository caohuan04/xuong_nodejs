import { Router } from "express";
import MoviesController from "../controllers/movies";
import { checkPermision } from "../middlewares/checkPermision";

const moviesRouter = Router();

const moviesController = new MoviesController();

moviesRouter.get("/", moviesController.getAllMovies);
moviesRouter.post("/", checkPermision, moviesController.createMovies);
moviesRouter.get("/:id", moviesController.getMoviesDetail);
moviesRouter.put("/:id", checkPermision, moviesController.updateMovies);
moviesRouter.delete("/:id", checkPermision, moviesController.deleteMovies);

export default moviesRouter;