const Sequelize = require('sequelize');
const db = require('../database/db')

const Admins = db.define('Admins', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
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
})

module.exports = Admins;

// class Admin extends Model {
//   get fullName() {
//     return this.firstname + ' ' + this.lastname;
//   }

//   set fullName(value) {
//     const names = value.split(' ');
//     this.setDataValue('firstname', names.slice(0, -1).join(' '));
//     this.setDataValue('lastname', names.slice(-1).join(' '));
//   }
// }

// Admin.init({

// }, {
//   sequelize,
//   modelName: 'Admin'
// });



// var Task = sequelize.define('Admin', {
//   title: DataTypes.STRING
// });

// Task.associate = function (models) {
//   models.Task.belongsTo(models.User, {
//     onDelete: "CASCADE",
//     foreignKey: {
//       allowNull: false
//     }
//   });
// };

// return Admin;
// };