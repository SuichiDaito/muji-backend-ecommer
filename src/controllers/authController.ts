import { LoginRequestDTO } from "../models/authModel";
import authServices from "../services/authServices";
import { Request, Response } from "express";
import AccountDTO from "../models/account.model";
import catchAsync from "../utils/catchAsync";

class AuthController {
    static login = catchAsync(async (req: Request, res: Response) => {
        const body: LoginRequestDTO = req.body;

        let accounts: AccountDTO[];
        accounts = await authServices.login(body);

        return res.status(200).json({
            success: true,
            message: "Login success!",
            data: accounts,
        });
    });

    // async login(req: Request, res: Response) {
    //     try {
    //         const body: LoginRequestDTO = req.body;

    //         let accounts: AccountDTO[];
    //         accounts = await authServices.login(body);

    //         res.status(200).json({
    //             success: true,
    //             message: "Login success!",
    //             data: accounts,
    //         });
    //     } catch (err) {
    //         console.log("error", err);
    //         return err;
    //     }

    // }

    // call function connect
    static async connect(req: any, res: any) {
        try {
            const account = await authServices.connect();
            res.status(200).json({
                message: "Login successful",
                data: account
            });

        } catch {
            res.status(404).json({
                message: "Login failed",
            });
        }
    }
}

export default AuthController;