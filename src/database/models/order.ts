import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Order = sequelize.define(
    "orders",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_payment: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "orders",
        underscored: true,
        timestamps: true,
    }
);

export default Order;