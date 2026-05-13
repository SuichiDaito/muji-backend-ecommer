'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('color_type', [
      {
        name: 'red',
        status: true
      },
      {
        name: 'blue',
        status: true
      },
      {
        name: 'black',
        status: true
      },
      {
        name: 'white',
        status: true
      },
      {
        name: 'green',
        status: true
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('color_type', {
      name: ['red', 'blue', 'black', 'white', 'green']
    });
  }
};