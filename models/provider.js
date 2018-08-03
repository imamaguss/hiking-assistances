'use strict';
module.exports = (sequelize, DataTypes) => {
  var Provider = sequelize.define('Provider', {
    name: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    feePerDay: DataTypes.INTEGER,
    availability: {
      type: DataTypes.BOOLEAN, 
      defaultValue: true
    },
    password: {
      type: DataTypes.STRING, 
      defaultValue: null
    }
  }, {});
  Provider.associate = function(models) {
    Provider.belongsToMany(models.Customer, {through: models.Booking, foreignKey: "providerId"});
  };
  return Provider;
};