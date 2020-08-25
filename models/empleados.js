'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empleados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      empleados.belongsTo(models.roles, {
        as: 'roles',
        foreignKey: 'rol_id'
      })
      empleados.belongsTo(models.especialidades, {
        as: 'especialidades',
        foreignKey: 'especialidad_id'
      })
    }
  };
  empleados.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING
    },
    dni: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    fecha_nacimiento: {
      allowNull: false,
      type: DataTypes.DATE
    },
    fecha_ingreso: {
      defaultValue: DataTypes.NOW,
      allowNull: false,
      type: DataTypes.DATE
    },
    telefono: {
      allowNull: false,
      type: DataTypes.STRING
    },
    mail: {
      allowNull: false,
      type: DataTypes.STRING
    },
    contraseña_hash: {
      allowNull: false,
      type: DataTypes.STRING
    },
    rol_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    matricula: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    especialidad_id: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    turnos: {
      allowNull: true,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'empleados',
  });
  return empleados;
};