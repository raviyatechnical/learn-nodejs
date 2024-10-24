'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@admin.com',
        password: '$2a$10$GXjN8FbIXMxdBA4uAEGjaetxb2VwAuevz2kfJveSdNl695mYDp0WS', // password
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
