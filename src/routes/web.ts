import express from "express";
import validateLoginInput from "../middleware/login.middleware";
import authController from "../controllers/authController";
const router = express.Router();

router.get("/", authController.connect);
router.post("/login", validateLoginInput, authController.login);

export default router;
