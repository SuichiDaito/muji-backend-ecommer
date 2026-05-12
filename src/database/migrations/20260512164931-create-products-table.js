"use strict";

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      id_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      id_color: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      id_size: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      price_original: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },

      deleted_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("products");
  },
};
