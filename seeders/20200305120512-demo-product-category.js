'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductCategories', [
      {
        title: 'Cosmetic',
        description: 'Cosmetics are products used to enhance or change the appearance of the face, fragrance or the texture of the body.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductCategories', null, {});
  }
};
