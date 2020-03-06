'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        cateId: 1,
        title: 'Mascara',
        description: 'Mascara is a cosmetic commonly used to enhance the eyelashes',
        price: 3990,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cateId: 1,
        title: 'Lipstick',
        description: 'Lipstick is a cosmetic product containing pigments.',
        price: 1299,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
