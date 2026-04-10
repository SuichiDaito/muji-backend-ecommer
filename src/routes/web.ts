import express from "express";
import AuthController from "../controllers/authController";
import validateLoginIput from "../middleware/login-middleware";
const router = express.Router();

const authController = new AuthController();

router.get("/", authController.connect);

router.post("/login", validateLoginIput, authController.login);

export default router;
