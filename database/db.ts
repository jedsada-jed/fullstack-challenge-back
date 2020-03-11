import { Sequelize, DataTypes } from 'sequelize'
import config from '../config/config'

export default new Sequelize({
  dialect: 'sqlite',
  storage: config.development.storage,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})
