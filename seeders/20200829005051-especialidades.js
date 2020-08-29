'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('especialidades', [{
      nombre: "pediatria",
      descripcion: "La pediatría es la especialidad médica que estudia al niño y sus enfermedades.",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'traumatología',
      descripcion: "Es la rama de la medicina que se dedica al estudio de las lesiones del aparato locomotor.",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'dermatología',
      descripcion: "La dermatología es la especialidad médica que estudia y trata el órgano cutáneo, el médico especializado en este órgano es llamado \"dermatólogo\".",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'fonoaudiología',
      descripcion: "Disciplina profesional que está relacionada con las ciencias de la salud, la psicología y la lingüística aplicada.",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('especialidades');
  }
};
