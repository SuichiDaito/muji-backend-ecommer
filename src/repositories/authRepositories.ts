
import Database from "../config/database";
import { LoginRequestDTO } from "../models/authModel";

class AuthRepositories {
    static async findByUser(data: LoginRequestDTO) {
        const connection = Database.connection();
        const [rows] = await (await connection).execute('select * from Account where username = ?', [data.username]);

        return rows as any;
    }

    static async connect() {
        const connection = Database.connection();
        const [rows] = await (await connection).execute("SELECT * FROM Account");

        return rows;
    }
}

export default AuthRepositories;