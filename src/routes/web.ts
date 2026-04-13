import express from "express";
import validateLoginIput from "../middleware/login.middleware";
import authController from "../controllers/authController";
const router = express.Router();

router.get("/", authController.connect);
router.post("/login", validateLoginIput, authController.login);

export default router;
