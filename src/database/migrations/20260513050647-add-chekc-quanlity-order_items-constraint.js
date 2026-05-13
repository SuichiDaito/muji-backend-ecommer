'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("order_items", {
      fields: ['quantity'],
      type: 'check',
      name: 'chk_quantity_order_items',
      where: {
        quantity: {
          [Sequelize.Op.gte]: 0
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_items', 'chk_quantity_order_items');
  }
};
