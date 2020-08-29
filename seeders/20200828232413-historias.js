'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('historias', [{
        username: 'paciente',
        historia: '{"alergias":{"amoxicilina":false,"contraste":false,"penicilina":true},"cirugias":{"apendicitis":false,"colecistectomia":false,"diverticulitis":false,"hernia":true},"enfermedades":{"colesterol":false,"diabetes":true,"hipertension":false,"trigliceridos":false},"estado_civil":"soltero","fatherData":{"antecedentes":{"cancer_colon":false,"cancer_mama":false,"diabetes":false,"hipertension":true,"otros":[""]},"apellido":"Simpsons","birthDate":"1966-01-29","birthDatePadre":"","nombre":"Homero"},"genero":"Masculino","habitos":{"Otros":"","alcoholismo":false,"estupefacientes":false,"sedentarismo":true,"tabaquismo":false},"motherData":{"antecedentes":{"cancer_colon":false,"cancer_mama":false,"diabetes":true,"hipertension":false,"otros":[""]},"apellido":"Bouvie","birthDate":"1969-05-29","birthDateMadre":"","nombre":"Marge"},"numeroObra":"123123123123","obra_social":"OSDE","ocupacion":"Desarrollador","peso":"110","talla":"180"}',
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
