const bcrypt = require('bcrypt')
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        nombre: "Franco",
        apellido: "Georgescu",
        username: "paciente",
        dni: 38427075,
        fecha_nacimiento: "1994-06-30 00:00:00",
        fecha_ingreso: new Date(),
        telefono: "3489-625740",
        mail: "fgeorgescu@uade.edu.ar",
        password: bcrypt.hashSync("test", 8),
        rol: "paciente",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nombre: "Juan Cruz",
        apellido: "Alonso",
        username: "secretaria",
        dni: 28974182,
        fecha_nacimiento: "1990-11-27 00:00:00",
        fecha_ingreso: new Date(),
        telefono: "3489-625740",
        mail: "jalonso@rumanosalud.com",
        password: bcrypt.hashSync("test", 8),
        rol: "secretaria",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nombre: "Samantha",
        apellido: "Biglieri",
        username: "doctor1",
        dni: 38427075,
        fecha_nacimiento: "1992-09-27 00:00:00",
        fecha_ingreso: new Date(),
        telefono: "3489-625740",
        mail: "sbiglieri@rumanosalud.com",
        password: bcrypt.hashSync("test", 8),
        rol: "doctor",
        especialidad:"pediatria",
        matricula: 123456,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nombre: "Pedro",
        apellido: "Nieto",
        username: "doctor2",
        dni: 38427075,
        fecha_nacimiento: "1992-09-27 00:00:00",
        fecha_ingreso: new Date(),
        telefono: "3489-625740",
        mail: "pnieto@rumanosalud.com",
        password: bcrypt.hashSync("test", 8),
        rol: "doctor",
        especialidad:"dermatología",
        matricula: 123456,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nombre: "Patricio",
        apellido: "Rickert",
        username: "doctor3",
        dni: 38427075,
        fecha_nacimiento: "1992-09-27 00:00:00",
        fecha_ingreso: new Date(),
        telefono: "3489-625740",
        mail: "prickert@rumanosalud.com",
        password: bcrypt.hashSync("test", 8),
        rol: "doctor",
        especialidad:"traumatología",
        matricula: 123456,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nombre: "Brian",
        apellido: "Froschauer",
        username: "doctor4",
        dni: 38427075,
        fecha_nacimiento: "1992-09-27 00:00:00",
        fecha_ingreso: new Date(),
        telefono: "3489-625740",
        mail: "bfroschauer@rumanosalud.com",
        password: bcrypt.hashSync("test", 8),
        rol: "doctor",
        especialidad:"fonoaudiología",
        matricula: 123456,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        nombre: "Paula",
        apellido: "Sarasa",
        username: "administrador",
        dni: 38427075,
        fecha_nacimiento: "1994-06-30 00:00:00",
        fecha_ingreso: new Date(),
        telefono: "3489-625740",
        mail: "psarasa@rumanosalud.com",
        password: bcrypt.hashSync("test", 8),
        rol: "administrador",
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
