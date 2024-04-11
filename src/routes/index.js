import moviesRouter from "./movies"
import categoriesRouter from "./categories";
import genreRouter from "./Genres";
import authRouter from "./auth";
import { Router } from "express";
import imagesRouter from "./images";


const router = Router();
router.get("/", (req, res) => {
    res.send("home")
})


router.use("/movies", moviesRouter);
router.use("/categories", categoriesRouter);
router.use("/genre", genreRouter);
router.use("/user", authRouter);
router.use("/images", imagesRouter);


export default router; 
