'use strict'
const bcrypt = require('bcrypt') 

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fakePWD = '123456'
    const admins = [
      {
        firstName: 'Jed',
        lastName: 'Ng',
        email: 'jed@mail.com',
        password: '',
        salt: bcrypt.genSaltSync(5),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jedsada',
        lastName: 'Saengow',
        email: 'jedsada@mail.com',
        password: '',
        salt: bcrypt.genSaltSync(5),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    admins.forEach((item) => {
      item.password = bcrypt.hashSync(fakePWD, item.salt)
    })
    return queryInterface.bulkInsert('Admins', admins)
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {})
  }
}
