'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("order_items", {
      fields: ['price_original'],
      type: 'check',
      name: 'chk_price_original_order_items',
      where: {
        price_original: {
          [Sequelize.Op.gte]: 0
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_items', 'chk_price_original_order_items');
  }
};
