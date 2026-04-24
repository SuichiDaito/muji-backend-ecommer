import express from "express";
import authMiddleware from "../middleware/login.middleware";
import authController from "../controllers/authController";
const router = express.Router();

router.get("/", authController.connect);
router.post("/login", authMiddleware.validateLoginInput, authController.login);

export default router;  
