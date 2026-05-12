"use strict";

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("role_type", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      name_role: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("role_type");
  },
};
