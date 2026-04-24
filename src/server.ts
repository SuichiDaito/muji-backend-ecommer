import express from "express";
import "reflect-metadata";

import webRouter from "./routes/web";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error.middleware";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", webRouter);

app.use(errorMiddleware);

app.listen(8081, () => {
  console.log(`Server running with port ${process.env.PORT} `);
});