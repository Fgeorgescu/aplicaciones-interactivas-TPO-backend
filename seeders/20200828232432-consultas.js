'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('consultas', [{
      username: 'paciente',
      consultas: '[{"diagnostico":"Colesterol y glucosa altos, necesita actividad física y dieta","diastolica":"13","fecha":"7/19/2019","doctor":"doctor1","motivo_consulta":"Control anual","nota":"No se realiza un checqueo desde hace 6 años. Se sabe de malos habítos que busca corregir","peso":"120","sistolica":"15","talla":"190"},{"diagnostico":"Mejora la presión, se da medicación para control de la glucosa en sangre","diastolica":"10","doctor":"doctor2","fecha":"01/13/2020","motivo_consulta":"Probamos con un doctor distinto","nota":"Se pide que comience una dieta con nutricionista","peso":"100","sistolica":"14","talla":"190"},{"diagnostico":"Se elimina la medicación del paciente","diastolica":"8","doctor":"doctor2","fecha":"8/29/2020","motivo_consulta":"Seguimiento presión alta","nota":"Se mejora notablemente la calidad de vida, se decide suspender la medicación","peso":"80","sistolica":"12","talla":"190"}]',
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
