'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('medicamentos', [{
      username: 'paciente',
      medicamentos: '[{"data": {"dosis": 0.5, "droga": "Ribotril", "intervalo": 24, "tableData": {"id": 0}, "fecha_alta": "08/29/2020", "fecha_receta": "08/29/2020"}}]',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
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
