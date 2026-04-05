import { LoginRequest } from "../models/authModel";
import authServices from "../services/authServices";
import { Errors } from "../errors/error-factory";

class AuthController {
    async login(req: any, res: any) {
        try {
            const body: LoginRequest = req.body;

            if (!body.username) {
                return Errors.requiredUsername;
            }

            const user = await authServices.login(body);

            if (!user) {
                return Errors.requiredUsername;
            }

            if (user == null) {
                return Errors.invalidUsername;
            }

            res.status(200).json({
                message: "Login success",
                data: user
            });
        } catch (err) {
            throw Errors.unknownError;
        }

    }
    // call function connect
    async connect(req: any, res: any) {
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