import authServices from "../services/authServices";

class AuthController {
    async login(req: any, res: any) {
        try {
            const { username } = req.body;
            console.log("show the username", username);

            if (!username) {
                return res.status(400).json({
                    message: "Username required!"
                });
            }

            const user = await authServices.login(username);

            if (!user) {
                return res.status(401).json({
                    message: "Invalid username"
                });
            }

            res.status(200).json({
                message: "Login success",
                data: user
            });
        } catch (err) {
            console.log("show the error", err);
            res.status(500).json({
                message: err
            });
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