'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Must be field'
        },
        len: {
          args: [8, 14],
          msg: 'Password is too sort'
        }
      }
    }
  }, {});
  Customer.associate = function(models) {
    Customer.belongsToMany(models.Provider, {through: models.Booking, foreignKey: "customerId"});
  };
  return Customer;
};