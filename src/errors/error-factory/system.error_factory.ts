import AppError from "../app-error";
import { SYSTEM_ERROR_CODES } from "../error-code/system.error_code";

export const SystemErrorCodes = {
    unknownError: () => new AppError(404, SYSTEM_ERROR_CODES.UNKNOW_ERROR, "Unknown error"),
    serverError: () => new AppError(500, SYSTEM_ERROR_CODES.SERVER_ERROR, "Server error"),
    dbError: () => new AppError(500, SYSTEM_ERROR_CODES.DB_ERROR, "Database incorrect")
} as const;