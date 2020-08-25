'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('empleados', {
      id: {
        allowNull: false,
        autoIncrement: true,
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
      contraseña_hash: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rol_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id"
        }
      },
      matricula: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      especialidad_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "especialidades",
          key: "id"
        }
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
    await queryInterface.dropTable('empleados');
  }
};