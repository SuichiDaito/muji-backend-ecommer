import express, { NextFunction } from "express";
import "reflect-metadata";

import webRouter from "./routes/web";
import dotenv from "dotenv";
import { IAppError } from "./models/errors/error-model";
import { Request, Response } from "express";
import errorMiddleware from "./middleware/error.middleware";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", webRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server running with port ${process.env.PORT} `);
});