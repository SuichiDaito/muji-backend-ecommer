import { LoginRequestDTO } from "../models/authModel";
import authServices from "../services/authServices";
import { Request, Response, NextFunction } from "express";
import AccountDTO from "../models/account.model";
import catchAsync from "../utils/catchAsync";

class AuthController {
    static login = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const body: LoginRequestDTO = req.body;
        let accounts: AccountDTO[];

        accounts = await authServices.login(body);

        return res.status(200).json({
            success: true,
            message: "Login success!",
            data: accounts,
        });
    });

    // call test connection with db
    static connect = catchAsync(async (req: Request, res: Response) => {
        const account = await authServices.connect();
        res.status(200).json({
            message: "Test connection success!",
            data: account
        });
    })
}

export default AuthController;