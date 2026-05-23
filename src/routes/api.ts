import express from "express";
import middleware from "../middleware/auth.middleware";
import authController from "../controllers/auth/auth.controller";
import { verifyJWT } from "../middleware/verifyJWT.middleware";
import productController from "../controllers/product/product.controller";
import cardController from "../controllers/cards/card.controller";
const router = express.Router();

//authentication and authorization 
router.post("/login", middleware.validateLoginInput, authController.loginController);
router.get("/logout/:id", authController.logoutController);
router.post("/register", authController.registerProfielsController);

// test connection 
router.get("/test", authController.connectController);

// flow related user
router.get("/profile/:id", verifyJWT, authController.getProfileController);

// flow relateed products 
router.get("/product/:id", verifyJWT, productController.getProductController);
router.get("/products", verifyJWT, productController.getAllProductController);

// flow relateed products 
router.get("/card/:id", verifyJWT, cardController.getCardController);
router.get("/cards", verifyJWT, cardController.getAllCardController);


export default router;  
