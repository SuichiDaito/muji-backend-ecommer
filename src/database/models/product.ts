import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Product = sequelize.define(
    "products",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_type: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_color: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        id_size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
        },

        price_original: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: "products",
        underscored: true,
        timestamps: true,
    }
);

export default Product;