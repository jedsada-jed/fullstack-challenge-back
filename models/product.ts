import { Sequelize, DataTypes, Model } from 'sequelize'
import db from '../models'

class ProductModel extends Model {
  public readonly id!: number
  public title!: string
  public description!: string
  public price!: number
  public createdAt!: Date
  public updatedAt!: Date
}

ProductModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.FLOAT
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
  tableName: 'Products',
})

export default ProductModel
