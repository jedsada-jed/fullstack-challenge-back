import { Sequelize } from "sequelize"

const env = process.env.NODE_ENV || "development"
const config = require("../config/config.json")[env]

export default new Sequelize({
  ...config,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

