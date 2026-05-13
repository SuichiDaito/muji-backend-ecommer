'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('size_type', [
      {
        name: 'S',
        status: true
      },
      {
        name: 'M',
        status: true
      },
      {
        name: 'L',
        status: true
      },
      {
        name: 'XL',
        status: true
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('size_type', {
      name: ['S', 'M', 'L', 'XL']
    });
  }
};