'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      id: 0,
      username: 'admin',
      email:'admin@admin.ru',
      role:'admin',
      password:'1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
