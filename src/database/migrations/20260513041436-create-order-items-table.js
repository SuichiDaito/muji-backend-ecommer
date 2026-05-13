"use strict";

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_items", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },

      id_order: {
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

      color_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      size_product: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      quanlity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      price_original: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      name_payment: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      gross_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      vat_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },

      net_amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("order_items");
  },
};
