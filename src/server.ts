import express from "express";
import "reflect-metadata";

import webRouter from "./routes/api";
import dotenv from "dotenv";
import errorMiddleware from "./middleware/error.middleware";
import basicAuth from "express-basic-auth";
import swaggerDocs from "./config/swagger";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", webRouter);

app.use('/api-docs', basicAuth({
  users: { 'admin': '123456' },
  challenge: true
}), swaggerDocs.swaggerUI.serve, swaggerDocs.swaggerUI.setup(swaggerDocs.swaggerSpec));

app.use(errorMiddleware);

app.listen(8081, () => {
  console.log(`Server running with port ${process.env.PORT} `);
  console.log('Swagger UI available at http://localhost:8081/api-docs');
});