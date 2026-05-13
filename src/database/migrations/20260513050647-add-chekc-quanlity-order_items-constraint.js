'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("order_items", {
      fields: ['quanlity'],
      type: 'check',
      name: 'chk_quanlity_order_items',
      where: {
        quanlity: {
          [Sequelize.Op.gte]: 0
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_items', 'chk_quanlity_order_items');
  }
};
