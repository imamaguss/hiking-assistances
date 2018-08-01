'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    Customer.belongsToMany(models.Provider, {through: models.Booking, foreignKey: "customerId"});
  };
  return Customer;
};