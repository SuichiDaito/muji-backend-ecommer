'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("products", {
      fields: ['id_size'],
      type: 'foreign key',
      name: 'fk_products_size_type',
      references: {
        table: 'size_type',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('products', 'fk_products_size_type');
  }
};
