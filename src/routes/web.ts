import express from "express";
import middleware from "../middleware/auth.middleware";
import authController from "../controllers/auth/auth.controller";
import { verifyJWT } from "../middleware/verifyJWT.middleware";
const router = express.Router();

router.post("/login", middleware.validateLoginInput, authController.loginController);
router.get("/test", verifyJWT, authController.connectController);
router.get("/profile/:id", authController.getProfileController);
router.get("/logout/:id", authController.logoutController);


export default router;  
