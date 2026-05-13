'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("card_items", {
      fields: ['id_card'],
      type: 'foreign key',
      name: 'fk_cards_card_items',
      references: {
        table: 'cards',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('card_items', 'fk_cards_card_items');
  }
};
