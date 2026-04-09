"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Errors = void 0;
const app_error_1 = __importDefault(require("./app-error"));
const error_codes_1 = require("./error-codes");
// export const Errors = {
//     userNotFound: () => {
//         new AppError(404, ERROR_CODES.USER_NOT_FOUND, "User not found");
//     },
//     requiredUsername: () => {
//         new AppError(404, ERROR_CODES.USERNAME_REQUIRED, "Username required!");
//     },
//     requiredPassword: () => {
//         return new AppError(400, ERROR_CODES.PASSWORD_REQUIRED, "Password required!");
//     },
//     invalidUsername: () => {
//         return new AppError(400, ERROR_CODES.INVALID_USERNAME, "Invalid Username!");
//     },
//     invalidPassword: () => {
//         return new AppError(404, ERROR_CODES.INVALID_PASSWORD, "Invalid Password!");
//     },
//     unknownError: () => {
//         return new AppError(400, ERROR_CODES.UNKNOW_ERROR, "Unknown error");
//     },
//     dbError: () => {
//         return new AppError(500, ERROR_CODES.DB_ERROR, "Database incorrect");
//     }
// } as const;
exports.Errors = {
    userNotFound: () => new app_error_1.default(404, error_codes_1.ERROR_CODES.USER_NOT_FOUND, "User not found"),
    requiredUsername: () => new app_error_1.default(404, error_codes_1.ERROR_CODES.USERNAME_REQUIRED, "Username required!"),
    requiredPassword: () => new app_error_1.default(400, error_codes_1.ERROR_CODES.PASSWORD_REQUIRED, "Password required!"),
    invalidUsername: () => new app_error_1.default(400, error_codes_1.ERROR_CODES.INVALID_USERNAME, "Invalid Username!"),
    invalidPassword: () => new app_error_1.default(404, error_codes_1.ERROR_CODES.INVALID_PASSWORD, "Invalid Password!"),
    unknownError: () => new app_error_1.default(400, error_codes_1.ERROR_CODES.UNKNOW_ERROR, "Unknown error"),
    dbError: () => new app_error_1.default(500, error_codes_1.ERROR_CODES.DB_ERROR, "Database incorrect")
};
//# sourceMappingURL=error-factory.js.map