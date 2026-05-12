import { Request, Response, NextFunction } from "express";
import { AuthErrorCodes } from "../errors/error-factory/auth.error_factory";
const jwt = require('jsonwebtoken');
require('dotenv').config();

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return next(AuthErrorCodes.tokenExpires());
    }

    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err: any, decoded: any) => {
            if (err) return next(AuthErrorCodes.wrongToken());
            const email = decoded.email;
            next();
        }
    );
}
