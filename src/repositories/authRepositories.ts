import Database from "../config/database";

class AuthRepositories {
    static async findByUserName(username: string) {
        const connection = Database.connection();
        try {
            const user = await (await connection).execute('select * from Account where username = ?', [username]);
            console.log("show the result", user);
            return user;

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