'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("orders", {
      fields: ['id_payment'],
      type: 'foreign key',
      name: 'fk_orders_payment_type',
      references: {
        table: 'payment_type',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('orders', 'fk_orders_payment_type');
  }
};
