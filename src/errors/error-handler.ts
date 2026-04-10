// import { Response, Request, NextFunction } from "express";
// import AppError from "./app-error";
// import { ERROR_CODES } from "./error-codes";
// import { IAppError } from "../models/errors/error-model";

// export const errorHandler = (err: IAppError, req: Request, res: Response, next: NextFunction) => {
//     if (err instanceof AppError) {
//         return res.status(err.status).json({
//             success: false,
//             error: {
//                 code: err.code,
//                 message: err.message
//             }
//         });

//     }

//     return res.status(500).json({
//         success: false,
//         error: {
//             code: ERROR_CODES.UNKNOW_ERROR,
//             message: "UNKNOW_ERROR"
//         }
//     });
// }