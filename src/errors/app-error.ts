import { IAppError } from "../models/errors/error-model";

export default class AppError extends Error implements IAppError {
    status: number;
    code: string;

    constructor(
        status: number,
        code: string,
        message: string,
    ) {
        super(message);
        this.status = status;
        this.code = code;
    }
}