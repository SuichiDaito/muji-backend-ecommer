import express from "express";
import middleware from "../middleware/auth.middleware";
import authController from "../controllers/auth/auth.controller";
import { verifyJWT } from "../middleware/verifyJWT.middleware";
const router = express.Router();

//authentication and authorization 
router.post("/login", middleware.validateLoginInput, authController.loginController);
router.get("/logout/:id", authController.logoutController);

// test connection 
router.get("/test", verifyJWT, authController.connectController);

// flow related user 
router.get("/profile/:id", verifyJWT, authController.getProfileController);


export default router;  
