'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [{
            id: 1,
            username: 'John Doe',
            email:'john@john.kz',
            role:'guest',
            password:'john',
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});

    },

    down: async (queryInterface, Sequelize) => {
         await queryInterface.bulkDelete('users', null, {});
    }
};
