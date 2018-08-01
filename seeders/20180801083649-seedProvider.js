'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   const arrProvider = [];
   const fs = require('fs');
   const providerData = fs.readFileSync('./employee.csv', 'utf8')
     .split('\n')
     .map(data => data.split(','))
     .forEach(data => {
       arrProvider.push({
         name: data[0],
         jobTitle: data[1],
         feePerDay: data[2],
         createdAt: new Date(),
         updatedAt: new Date()
       })
     });

    return queryInterface.bulkInsert('Providers', arrProvider, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Providers', null, {});
     
  }
};
