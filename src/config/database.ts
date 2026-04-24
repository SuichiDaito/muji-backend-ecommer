import "dotenv/config";
import mysql from "mysql2/promise";
import pool from "mysql2";

class Database {
    // create 1 connection by connection
    // static async connection() {
    //     const connection = await mysql.createConnection(
    //         {
    //             host: process.env.DB_HOST as string,
    //             port: Number(process.env.DB_PORT),
    //             user: process.env.DB_USER as string,
    //             password: process.env.DB_PASSWORD as string,
    //             database: process.env.DB_NAME as string
    //         }
    //     );

    //     return connection;
    // }

    // create pool connection include a lot of call connection and optimize time call connection inside. 
    static async connection() {
        const connect = await mysql.createPool(
            {
                host: process.env.DB_HOST as string,
                port: Number(process.env.DB_PORT),
                user: process.env.DB_USER as string,
                password: process.env.DB_PASSWORD as string,
                database: process.env.DB_NAME as string,
                waitForConnections: true,
                connectionLimit: 10,
                queueLimit: 0
            }
        );

        return connect;
    }
}
export default Database;