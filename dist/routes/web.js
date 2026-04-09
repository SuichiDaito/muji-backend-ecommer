"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { getAccount, getAbc } from "../controllers/";
const authController_1 = __importDefault(require("../controllers/authController"));
const router = express_1.default.Router();
const authController = new authController_1.default();
router.get("/", authController.connect);
router.post("/login", authController.login);
exports.default = router;
//# sourceMappingURL=web.js.map