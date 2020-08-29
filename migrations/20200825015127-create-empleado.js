'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      apellido: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      dni: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fecha_nacimiento: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fecha_ingreso: {
        defaultValue: Sequelize.NOW,
        allowNull: false,
        type: Sequelize.DATE
      },
      telefono: {
        allowNull: false,
        type: Sequelize.STRING
      },
      mail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rol: {
        allowNull: false,
        defaultValue: "secretaria",
        type: Sequelize.STRING
      },
      matricula: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      especialidad: {
        allowNull: true,
        type: Sequelize.STRING
      },
      turnos: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};