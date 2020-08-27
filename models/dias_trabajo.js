'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dias_trabajo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dias_trabajo.init({
    fecha: DataTypes.DATE,
    doctor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dias_trabajo',
  });
  return dias_trabajo;
};