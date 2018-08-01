'use strict';
module.exports = (sequelize, DataTypes) => {
  var Booking = sequelize.define('Booking', {
    providerId: DataTypes.INTEGER,
    customerId: DataTypes.INTEGER,
    packageDuration: DataTypes.STRING,
    totalWeightKg: DataTypes.INTEGER,
    groupSize: DataTypes.INTEGER
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};