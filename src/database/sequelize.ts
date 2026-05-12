// import { Sequelize } from "sequelize";

// import dotenv from "dotenv";

// dotenv.config();

// const sequelize = new Sequelize(
//     process.env.DB_NAME as string,
//     process.env.DB_USER as string,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         port: Number(process.env.DB_PORT),
//         dialect: "postgres",
//         logging: false,
//         pool: {
//             max: 10,
//             min: 0,
//             acquire: 30000, // 30s,
//             idle: 10000 // timeout 10s

//         }
//     }
// );

// export default sequelize;

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    "jdbc:postgresql://localhost:5532/muji_ecommerce_postgres",
    {
        dialect: "postgres",
        logging: false,
    }
);

export default sequelize;