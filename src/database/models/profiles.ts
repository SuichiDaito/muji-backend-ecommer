import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Profile = sequelize.define(
    "profiles",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },

        id_role: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
        },

        gender: {
            type: DataTypes.BOOLEAN,
        },

        date: {
            type: DataTypes.DATE
        },

        address: {
            type: DataTypes.STRING
        },

        email: {
            type: DataTypes.STRING
        },

        password: {
            type: DataTypes.STRING
        },

        phone: {
            type: DataTypes.STRING
        },

        refresh_token: {
            type: DataTypes.STRING
        },

        revoked: {
            type: DataTypes.STRING
        }
    },
    {
        tableName: "profiles",
        underscored: true,
        timestamps: true,
    }
);

export default Profile;