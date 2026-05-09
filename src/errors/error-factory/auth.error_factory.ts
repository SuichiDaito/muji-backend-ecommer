import AppError from "../app-error";
import { AUTH_ERROR_CODES } from "../error-code/auth.error_code";

export const AuthErrorCodes = {
    invalidInputFormat: () => new AppError(400, AUTH_ERROR_CODES.INVALID_INPUT_FORMAT, "Email or password must string"),
    fieldRequired: () => new AppError(401, AUTH_ERROR_CODES.REQUIRED_FIELD, "Email or password are required"),
    invalidEmailAndPassword: () => new AppError(404, AUTH_ERROR_CODES.USER_NOT_FOUND, "User not found!"),
    wrongToken: () => new AppError(403, AUTH_ERROR_CODES.TOKEN_IS_WRONG, "Token is wrong"),
    tokenExpires: () => new AppError(401, AUTH_ERROR_CODES.TOKEN_EXPIRES, "Token expire !")
} as const;