"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const app_error_1 = __importDefault(require("./app-error"));
const error_codes_1 = require("./error-codes");
const errorHandler = (err, req, res, next) => {
    if (err instanceof app_error_1.default) {
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.code,
                message: err.message
            }
        });
    }
    return res.status(500).json({
        success: false,
        error: {
            code: error_codes_1.ERROR_CODES.UNKNOW_ERROR,
            message: "UNKNOW_ERROR"
        }
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error-handler.js.map