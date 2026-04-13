import { NextFunction } from "express";
import { Errors } from "../errors/error-factory";
import { Request, Response } from "express";

const validataLoginInput = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    const username = body.username;

    if (!username || username == "" || username == " " || username == null) {
        return next(Errors.userNotFound());
    }
    next();
}

export default validataLoginInput;