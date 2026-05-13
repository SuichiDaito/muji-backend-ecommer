'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('role_type', [
      {
        name_role: 'guest',
        status: true
      },
      {
        name_role: 'customer',
        status: true
      },
      {
        name_role: 'VIP',
        status: true
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('role_type', {
      name_role: ['guest', 'customer', 'VIP']
    });
  }
};