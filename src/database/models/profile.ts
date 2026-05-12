import { DataTypes } from "sequelize";
import sequelize from "../sequelize";

const Profile = sequelize.define(
    "Profile",
    {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        avatar: {
            type: DataTypes.STRING,
        },

        bio: {
            type: DataTypes.TEXT,
        },
    },
    {
        tableName: "profiles",
        underscored: true,
        timestamps: true,
    }
);

export default Profile;