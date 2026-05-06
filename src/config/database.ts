import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

class Database {

    private static pool = new Pool({
        host: process.env.HOST_NAME,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        max: 10,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,

    });

    static getPool(): Pool {
        return this.pool;
    }
}

export default Database;