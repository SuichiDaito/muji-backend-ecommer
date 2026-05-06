import { NextFunction } from "express";
import { Errors } from "../errors/error-factory";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt";


class AuthMiddleware {
    static validateLoginInput = (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;

        if (body.username == undefined || body.password == undefined) {
            return next(Errors.fieldRequired());
        } else if (typeof body.username !== "string" || typeof body.password !== "string") {
            return next(Errors.invalidInputFormat());
        }
        next();
    }

    static hasingInputPassword = async (password: string) => {
        const hashPass = await bcrypt.hash(password, 10);
        return hashPass;
    }

    static comparePassword = async (password: string, hash: string) => {
        const isComparePass = await bcrypt.compare(password, hash);
        return isComparePass;
    }
}

export default AuthMiddleware;