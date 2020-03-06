const Sequelize = require('sequelize');
const db = require('../../database/db')

const ProductCategory = db.define('ProductCategories', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
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

ProductCategory.associate = function (models) {
  ProductCategory.hasMany(models.Products, {as: 'product'})
};

module.exports = ProductCategory;
