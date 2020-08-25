'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      rol: 'patient',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      rol: 'secretaria',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      rol: 'doctor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      rol: 'administrador',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
