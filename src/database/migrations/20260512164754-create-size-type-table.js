"use strict";

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("size_type", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("size_type");
  },
};
