'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example1@example.com',
        password: 'klfwflkjwef',
        salt: 'saultKey',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'John 2',
        lastName: 'Doe 2',
        email: 'example2@example.com',
        password: 'klfwf22222lkjwef',
        salt: 'saultKey2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {});
  }
};
