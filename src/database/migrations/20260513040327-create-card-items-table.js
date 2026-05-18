"use strict";

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("card_items", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      id_card: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      name_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      size_product: {
        type: Sequelize.STRING,
        allowNull: false
      },

      color_product: {
        type: Sequelize.STRING,
        allowNull: false
      },

      price_original: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      subtotal_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      is_selected: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
      },

      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: null
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("card_items");
  },
};
