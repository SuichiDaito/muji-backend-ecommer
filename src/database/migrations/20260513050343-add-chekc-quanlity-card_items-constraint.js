'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("card_items", {
      fields: ['quantity'],
      type: 'check',
      name: 'chk_quantity_card_items',
      where: {
        quantity: {
          [Sequelize.Op.gte]: 0
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('card_items', 'chk_quantity_card_items');
  }
};
