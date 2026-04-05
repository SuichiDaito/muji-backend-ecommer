import { ErrorCode } from "./error-codes"
import { IAppError } from "../models/errors/error-model";

export class AppError extends Error implements IAppError {
    status: number;
    code: ErrorCode;

    constructor(
        status: number,
        code: ErrorCode,
        message: string,
    ) {
        super(message);
        this.status = status;
        this.code = code;
    }
}