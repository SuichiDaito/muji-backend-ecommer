'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("orders", {
      fields: ['id_user'],
      type: 'foreign key',
      name: 'fk_profiles_orders',
      references: {
        table: 'profiles',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('orders', 'fk_profiles_orders');
  }
};
