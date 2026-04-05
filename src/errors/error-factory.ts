import { AppError } from "./app-error"
import { ERROR_CODES } from "./error-codes"

export const Errors = {
    userNotFound: () => {
        new AppError(404, ERROR_CODES.USER_NOT_FOUND, "User not found");
    },
    requiredUsername: () => {
        new AppError(400, ERROR_CODES.USERNAME_REQUIRED, "Username required!");
    },
    requiredPassword: () => {
        new AppError(400, ERROR_CODES.PASSWORD_REQUIRED, "Password required!");
    },
    invalidUsername: () => {
        new AppError(400, ERROR_CODES.INVALID_USERNAME, "Invalid Username!");
    },
    invalidPassword: () => {
        new AppError(404, ERROR_CODES.INVALID_PASSWORD, "Invalid Password!");
    },
    unknownError: () => {
        new AppError(400, ERROR_CODES.UNKNOW_ERROR, "Unknown error");
    },
    dbError: () => {
        new AppError(500, ERROR_CODES.DB_ERROR, "Database incorrect");
    }
} as const;