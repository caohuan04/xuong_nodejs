import Genre from "../models/GenreModel";

class GenresController {
    async getAllGenres(req, res) {
        try {
            const genre = await Genre.find();
            res.status(200).json({
                message: "Get Done",
                data: genre
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    // GET /Genres/:id
    async getGenresDetail(req, res) {
        try {
            const genre = await Genre.findById(req.params.id);
            if (!genre) {
                return res.status(404).json({
                    message: "Not found",
                });
            }
            res.status(200).json({
                message: "Get Detail Done",
                data: genre
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    // POST /Genres
    async createGenres(req, res) {
        const newGenre = await Genre.create(req.body);
        const saveGenre = await newGenre.save();
        res.status(200).json({
            message: "Create Done ",
            data: saveGenre
        });
    }

    // PUT /Genres
    async updateGenres(req, res) { 
        try {
            const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {new: true});
            if (!genre) {
                return res.status(404).json({
                    message: "Not found",
                });
            }
            res.status(200).json({
                message: "Update Done",
                data: genre
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }

    // DELETE /Genres
    async deleteGenres(req, res) {
        try {
            const genre = await Genre.findByIdAndDelete(req.params.id);
            if (!genre) {
                return res.status(404).json({
                    message: "Not found",
                });
            }
            res.status(200).json({
                message: "Delete Done",
                data: genre
            });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }
    }
}

export default GenresController