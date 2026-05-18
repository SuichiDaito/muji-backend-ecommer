import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const OrderItems = sequelize.define(
    "order_items",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_order: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        name_product: {
            type: DataTypes.STRING,
        },

        color_product: {
            type: DataTypes.STRING
        },

        size_product: {
            type: DataTypes.STRING
        },

        quantity: {
            type: DataTypes.INTEGER
        },

        price_original: {
            type: DataTypes.INTEGER
        },

        name_payment: {
            type: DataTypes.STRING
        },

        gross_amount: {
            type: DataTypes.INTEGER
        },

        vat_amount: {
            type: DataTypes.INTEGER
        },

        net_amount: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: "order_items",
        underscored: true,
        timestamps: true,
    }
);

export default OrderItems;