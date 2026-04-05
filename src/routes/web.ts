import express from "express";
// import { getAccount, getAbc } from "../controllers/";
import AuthController from "../controllers/authController";
const router = express.Router();

const authController = new AuthController();

router.get("/", authController.connect);

router.post("/login", authController.login);

export default router;
