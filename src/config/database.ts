import "dotenv/config";
import mysql from "mysql2/promise";

class Database {
    static async connection() {
        const connection = await mysql.createConnection(
            {
                host: process.env.DB_HOST as string,
                port: Number(process.env.DB_PORT),
                user: process.env.DB_USER as string,
                password: process.env.DB_PASSWORD as string,
                database: process.env.DB_NAME as string
            }
        );

        return connection;
    }
}
export default Database;