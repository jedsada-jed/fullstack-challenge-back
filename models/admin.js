const db = require('./database/db')

const Admin = db.define('Admin', {
  id: DataTypes.INTEGER,
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    validate: { isEmail: true }
  },
  password: DataTypes.STRING,
  salt: DataTypes.STRING,
  createAt: DataTypes.DATE,
})

module.exports = Admin;

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