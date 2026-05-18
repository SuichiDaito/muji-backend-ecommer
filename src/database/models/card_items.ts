import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const CardItems = sequelize.define(
    "card_items",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_card: {
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

        size_product: {
            type: DataTypes.STRING
        },

        color_product: {
            type: DataTypes.STRING
        },

        price_original: {
            type: DataTypes.INTEGER
        },

        quantity: {
            type: DataTypes.INTEGER
        },

        subtotal_amount: {
            type: DataTypes.INTEGER
        },

        is_selected: {
            type: DataTypes.BOOLEAN
        }
    },
    {
        tableName: "card_items",
        underscored: true,
        timestamps: true,
    }
);

export default CardItems;