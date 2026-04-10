import { LoginRequestDTO } from "../models/authModel";
import authServices from "../services/authServices";
import { Errors } from "../errors/error-factory";

class AuthController {
    async login(req: any, res: any) {
        try {
            const body: LoginRequestDTO = req.body;

            console.log("show the error request username = ", body.username);

            debugger;
            if (!body.username || body.username == "" || body.username == null || body.username == " ") {
                console.log("error in here");
                // throw Errors.requiredUsername();
            }

            const user = await authServices.login(body);

            console.log("show of the user", typeof user);
            if (!user) {
                throw Errors.invalidUsername();
            }

            res.status(200).json({
                message: "Login success",
                data: user
            });
        } catch (err) {
            console.log("error", err);
            throw Errors.unknownError();
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