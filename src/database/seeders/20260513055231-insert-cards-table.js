'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cards', [
      { id_user: 1, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 2, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 3, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 4, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 5, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 6, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 7, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 8, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 9, status: true, created_at: new Date(), deleted_at: null },
      { id_user: 10, status: true, created_at: new Date(), deleted_at: null },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cards', null, {});
  },
};