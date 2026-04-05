import express from "express";

import webRouter from "./routes/web";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/", webRouter);


app.listen(process.env.PORT, () => {
  console.log(`Server running with port ${3307} `);
});