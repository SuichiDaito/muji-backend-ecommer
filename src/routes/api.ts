import express from "express";
import middleware from "../middleware/auth.middleware";
import authController from "../controllers/auth/auth.controller";
import { verifyJWT } from "../middleware/verifyJWT.middleware";
const router = express.Router();

//authentication and authorization 
router.post("/login", middleware.validateLoginInput, authController.loginController);
router.get("/logout/:id", authController.logoutController);
router.post("/register", authController.registerProfielsController);

// test connection 
router.get("/test", authController.connectController);

router.get("/profile/:id", verifyJWT, authController.getProfileController);
// flow related user 

export default router;  
