const Sequelize = require('sequelize');
const db = require('../../database/db')

const Product = db.define('Products', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  cateId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'ProductCategories',
      key: 'id'
    }
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.FLOAT
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
});

Product.associate = function (models) {
  console.log('models', models)
  Product.belongsTo(models.ProductCategories, { foreignKey: 'cateId', as: 'category' })
};

module.exports = Product;
