'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const firstCustomer = [
      {
        name: 'Mario Bross',
        email: 'mariobross@mail.com',
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Luigi Green',
        email: 'luigigreen@mail.com',
        password: 9876,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]
    return queryInterface.bulkInsert('Customers', firstCustomer, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};