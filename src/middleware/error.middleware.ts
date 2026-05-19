import e, { NextFunction, Response, Request } from "express";
import { IAppError } from "../models/errors/error-model";
import AppError from "../errors/app-error";
import { Prisma } from '@prisma/client'

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
    } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code == "P2002") {
            console.log("show the error for user", err.code);
            return res.status(400).json({
                success: false,
                error: {
                    code: "DUPLICATE_DATA",
                    message: "Duplicate data"
                }
            });
        } else if (err.code == "P2025") {
            return res.status(404).json({
                success: false,
                error: {
                    code: "NOT_FOUND_DATA",
                    message: "Data not found!"
                }
            });
        } else if (err.code == "P2003") {
            return res.status(400).json({
                message: 'Cannot delete because related data exists'
            });

        }
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