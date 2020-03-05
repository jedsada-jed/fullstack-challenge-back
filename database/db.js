const { Sequelize } = require('sequelize');
const config = require('../config/config')

module.exports = new Sequelize({
  dialect: 'sqlite',
  storage: config.development.storage,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
