'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("card_items", {
      fields: ['price_original'],
      type: 'check',
      name: 'chk_price_original_card_items',
      where: {
        price_original: {
          [Sequelize.Op.gte]: 0
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('card_items', 'chk_price_original_card_items');
  }
};
