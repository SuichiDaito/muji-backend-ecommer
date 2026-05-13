'use strict';

const { type } = require("node:os");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("profiles", {
      fields: ['email'],
      type: 'unique',
      name: 'uq_email_profiles',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('profiles', 'uq_email_profiles');
  }
};
