import AppError from "./app-error"
import { ERROR_CODES } from "./error-codes"

// error system => những lỗi này đã được define

export const Errors = {
    invalidInputFormat: () => new AppError(400, ERROR_CODES.INVALID_INPUT_FORMAT, "Username or password must string"),
    fieldRequired: () => new AppError(401, ERROR_CODES.REQUIRED_FIELD, "Username or password are required"),
    invalidUsernameAndPassword: () => new AppError(404, ERROR_CODES.INVALID_FIELD, "Username or password are invalided"),
    unknownError: () => new AppError(404, ERROR_CODES.UNKNOW_ERROR, "Unknown error"),
    serverError: () => new AppError(500, ERROR_CODES.SERVER_ERROR, "Server error"),
    dbError: () => new AppError(500, ERROR_CODES.DB_ERROR, "Database incorrect")
} as const;