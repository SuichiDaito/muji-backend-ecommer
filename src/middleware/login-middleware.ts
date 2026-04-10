import { NextFunction } from "express";
import { Errors } from "../errors/error-factory";

const validataLoginInput = (req: any, res: any, next: NextFunction) => {
    const username = req.body.username;

    console.log("middleware validate input username", username);

    if (!username || username == "" || username == " ") {
        return next(Errors.requiredUsername());
    }
    next();
}

export default validataLoginInput;