import { Sequelize, DataTypes, Model } from 'sequelize'
import db from '../models'

class AdminModel extends Model {
  public readonly id!: number
  public firstName!: string
  public lastName!: string
  public email!: string
  public password!: string
  public salt!: string
  public createdAt!: Date
  public updatedAt!: Date
}

AdminModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  salt: {
    type: DataTypes.STRING
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
}, {
  sequelize: db,
  tableName: 'Admins',
})

export default AdminModel