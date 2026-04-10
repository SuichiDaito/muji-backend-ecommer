import Database from "../config/database";
import { LoginRequestDTO } from "../models/authModel";

class AuthRepositories {
    static async findByUser(data: LoginRequestDTO) {
        const connection = Database.connection();
        try {
            const [rows] = await (await connection).execute('select * from Account where username = ?', [data.username]);
            console.log("show the result", [rows]);
            console.log("show the object of rows", typeof rows);
            console.log("parse of the object", JSON.stringify(rows));

            console.log("parse of the typeof object ", typeof JSON.stringify(rows));
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