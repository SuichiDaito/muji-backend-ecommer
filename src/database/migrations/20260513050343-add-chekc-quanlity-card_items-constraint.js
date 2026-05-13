'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("card_items", {
      fields: ['quanlity'],
      type: 'check',
      name: 'chk_quanlity_card_items',
      where: {
        quanlity: {
          [Sequelize.Op.gte]: 0
        }
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('card_items', 'chk_quanlity_card_items');
  }
};
