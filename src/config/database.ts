import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

class Database {
    private static pool = new Pool({
        host: process.env.DB_HOST as string,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_NAME as string,
        max: 10,
        idleTimeoutMillis: 30000, // idle 30s thì đóng
        connectionTimeoutMillis: 2000, // timeout khi connect
    });

    static getPool(): Pool {
        return this.pool;
    }
}

export default Database;