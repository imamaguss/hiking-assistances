'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provider = sequelize.define('Provider', {
    name: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    feePerDay: DataTypes.INTEGER
  }, {});
  Provider.associate = function(models) {
    Provider.belongsToMany(models.Customer, {through: models.Booking, foreignKey: "providerId"});
  };
  return Provider;
};