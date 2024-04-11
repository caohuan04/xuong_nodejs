import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./config/dbconfig";
import router from "./routes";

dotenv.config();
const app = express();
app.use(
    express.urlencoded({
        extended: true,
    }));
app.use(express.json());

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/movies_xuong";
connectMongoDB(dbUrl)
app.use("/", router)
export const viteNodeApp = app;