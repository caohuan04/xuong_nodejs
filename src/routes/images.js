import { Router } from "express";
import ImageContorller from "../controllers/images";
import { uploadImage } from "../config/cloudinaryConfig";
import { checkPermision } from "../middlewares/checkPermision";

const imagesRouter = Router();
const imageContorller = new ImageContorller();

imagesRouter.post(
  "/clound",
  checkPermision,
  uploadImage.single("image"),
  imageContorller.uploadSingleImage
);

imagesRouter.delete(
  "/clound/:id",
  checkPermision,
  imageContorller.deleteImage
);

export default imagesRouter;
