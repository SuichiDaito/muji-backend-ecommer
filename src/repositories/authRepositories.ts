import Database from "../config/database";
import { LoginRequest } from "../models/authModel";

class AuthRepositories {
    static async findByUser(data: LoginRequest) {
        const connection = Database.connection();
        try {
            const [rows] = await (await connection).execute('select * from Account where username = ?', [data.username]);
            console.log("show the result", [rows]);
            return rows;

        } catch (err) {
            console.log("show the error", err);
            console.log("err in the call authRepo");
            return null;
        }
    }

    static async connect() {
        const connection = Database.connection();
        try {
            const [rows] = await (await connection).execute("SELECT * FROM Account");
            console.log("show the result", [rows]);
            return rows;

        } catch (err) {
            console.log("show the error", err);
        }
    }
}

export default AuthRepositories;