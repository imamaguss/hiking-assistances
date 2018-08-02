'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Providers', [{
        name: 'Andry',
        jobTitle: 'owner',
        feePerDay: 0,
        password: 12345,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Imam',
        jobTitle: 'owner',
        feePerDay: 0,
        password: 12345,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
