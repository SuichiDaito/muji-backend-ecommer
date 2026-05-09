import { NextFunction } from "express";
import { AuthErrorCodes } from "../errors/error-factory/auth.error_factory";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";

const validateLoginInput = (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    if (body.email == undefined || body.password == undefined) {
        return next(AuthErrorCodes.fieldRequired);
    } else if (typeof body.email !== "string" || typeof body.password !== "string") {
        return next(AuthErrorCodes.invalidInputFormat);
    }
    next();
}

// dành cho parse từ password => hashing
const hasingInputPassword = async (password: string) => {
    const hashPass = await bcrypt.hash(password, 10);
    return hashPass;
}

// dành cho compare.
const comparePassword = async (password: string, hash: string) => {
    const isComparePass = await bcrypt.compare(password, hash);
    return isComparePass;
}


export default {
    validateLoginInput, hasingInputPassword, comparePassword
}