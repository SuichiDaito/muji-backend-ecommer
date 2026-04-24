import { NextFunction } from "express";
import { Errors } from "../errors/error-factory";
import { Request, Response } from "express";

const validateLoginInput = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    if (body.username == undefined || body.password == undefined) {
        return next(Errors.fieldRequired());
    } else if (typeof body.username !== "string" || typeof body.password !== "string") {
        return next(Errors.invalidInputFormat());
    }
    next();
}

export default validateLoginInput;