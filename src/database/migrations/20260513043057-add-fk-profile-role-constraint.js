'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("profiles", {
      fields: ['id_role'],
      type: 'foreign key',
      name: 'fk_profile_role',
      references: {
        table: 'role_type',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'

    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('profiles', 'fk_profile_role');
  }
};
