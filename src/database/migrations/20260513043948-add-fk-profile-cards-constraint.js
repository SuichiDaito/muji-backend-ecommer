'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("cards", {
      fields: ['id_user'],
      type: 'foreign key',
      name: 'fk_profile_cards',
      references: {
        table: 'profiles',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('cards', 'fk_profile_cards');
  }
};
