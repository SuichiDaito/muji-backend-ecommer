import { ErrorCode } from "../../errors/error-codes";

export interface IAppError {
    status: number;
    code: ErrorCode;
    message: string;
}