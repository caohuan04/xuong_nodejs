import Movie from "../models/MovieModel";
import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError";

class MoviesController {
    // GET /movies
    async getAllMovies(req, res) {
        try {
            const movies = await Movie.find().populate(["category", "genres"]);
            res.status(StatusCodes.OK).json({
                message: "Get All Movies Done",
                data: movies
            });
        } catch (error) {
            next(error);
        }
    }

    // GET /movies/:id
    async getMoviesDetail(req, res) {
        try {
            const movie = await Movie.findById(req.params.id).populate(["category", "genres"]);
            if (!movie) throw new ApiError(404, "Movie not found")
            res.status(StatusCodes.OK).json({
                message: "Get Movies Detail Done",
                data: movie
            });
        } catch (error) {
            next(error);
        }
    }

    // POST /movies
    async createMovies(req, res) {
        try {
            const newMovie = await Movie.create({
                ...req.body,
                user: res.locals.id
            });
            res.status(StatusCodes.CREATE).json({
                message: "Create Movies Successfull",
                data: newMovie
            });
        } catch (error) {
            next(error);
        }
    }

    // PUT /movies
    async updateMovies(req, res) {
        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body);
            if (!movie) throw new ApiError(404, "Movie not found");
            const updateMovies = await Movie.findById(req.params.id);
            res.status(StatusCodes.OK).json({
                message: "Update Movies Successfull",
                data: updateMovies
            });
        } catch (error) {
            next(error);
        }
    }

    // DELETE /movies
    async deleteMovies(req, res) {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if (!movie) throw new ApiError(404, "Movie not found");

            res.status(StatusCodes.OK).json({
                message: "Delete Detail Done",
                data: movie
            });
        } catch (error) {
            next(error);
        }
    }
}

export default MoviesController;