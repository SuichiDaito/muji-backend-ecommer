import express, { NextFunction } from "express";

import webRouter from "./routes/web";
import dotenv from "dotenv";
import { IAppError } from "./models/errors/error-model";
import { Request, Response } from "express";
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", webRouter);


app.use((err: IAppError, req: Request, res: any, next: NextFunction) => {
  const statusCode = err.status;
  console.log("error status", err);

  res.status(statusCode).json({
    error: err.code,
    message: statusCode == 500 ? "Server failed" : err.message
  });
})

app.listen(process.env.PORT, () => {
  console.log(`Server running with port ${process.env.PORT} `);
});