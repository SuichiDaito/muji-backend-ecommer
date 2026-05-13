'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('product_type', [
      {
        name: 'clothes',
        status: true
      },
      {
        name: 'shoes',
        status: true
      },
      {
        name: 'sandals',
        status: true
      },
      {
        name: 'hat',
        status: true
      },
      {
        name: 'accessories',
        status: true
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('product_type', {
      name: ['clothes', 'shoes', 'sandals', 'hat', 'accessories']
    });
  }
};