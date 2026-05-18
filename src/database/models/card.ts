import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Card = sequelize.define(
    "cards",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        status: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        tableName: "cards",
        underscored: true,
        timestamps: true,
    }
);

export default Card;