"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authServices_1 = __importDefault(require("../services/authServices"));
const error_factory_1 = require("../errors/error-factory");
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                console.log("show the error request username = ", body.username);
                debugger;
                if (!body.username || body.username == "" || body.username == null || body.username == " ") {
                    console.log("error in here");
                    return error_factory_1.Errors.requiredUsername();
                }
                const user = yield authServices_1.default.login(body);
                console.log("show of the user", typeof user);
                if (!user) {
                    throw error_factory_1.Errors.invalidUsername();
                }
                res.status(200).json({
                    message: "Login success",
                    data: user
                });
            }
            catch (err) {
                throw error_factory_1.Errors.unknownError();
            }
        });
    }
    // call function connect
    connect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const account = yield authServices_1.default.connect();
                res.status(200).json({
                    message: "Login successful",
                    data: account
                });
            }
            catch (_a) {
                res.status(404).json({
                    message: "Login failed",
                });
            }
        });
    }
}
exports.default = AuthController;
//# sourceMappingURL=authController.js.map