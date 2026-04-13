import { NextFunction, Response, Request } from "express";
import { IAppError } from "../models/errors/error-model";
import AppError from "../errors/app-error";

const errorMiddleware = (err: IAppError, req: Request, res: Response, next: NextFunction) => {
    console.log("Error = ", err);

    if (err instanceof AppError) {
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
            code: "SERVER_ERROR",
            message: "Server error!"
        }
    });

}

export default errorMiddleware;