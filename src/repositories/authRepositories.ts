import { RowDataPacket } from "mysql2";
import Database from "../config/database";
import { LoginRequestDTO } from "../models/authModel";

class AuthRepositories {
    static async findByUser(data: LoginRequestDTO) {
        const connection = Database.connection();
        try {
            const [rows] = await (await connection).execute('select * from Account where username = ?', [data.username]);

            console.log("rows in the repositories = ", rows);
            return rows as any;

        } catch (err) {
            return err;
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