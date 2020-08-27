'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paceinte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  paceinte.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    username: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.DATE,
    telefono: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paceinte',
  });
  return paceinte;
};