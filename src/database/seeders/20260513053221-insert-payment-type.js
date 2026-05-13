'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('payment_type', [
      {
        name: 'card',
        status: true
      },
      {
        name: 'credit_card',
        status: true
      },
      {
        name: 'COD',
        status: true
      },
      {
        name: 'e-commerce',
        status: true
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('payment_type', {
      name: ['card', 'credit_card', 'COD', 'e-commerce']
    });
  }
};