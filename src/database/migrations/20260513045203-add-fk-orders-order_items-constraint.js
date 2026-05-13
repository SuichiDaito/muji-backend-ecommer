'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("order_items", {
      fields: ['id_order'],
      type: 'foreign key',
      name: 'fk_orders_order_items',
      references: {
        table: 'orders',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('order_items', 'fk_orders_order_items');
  }
};
