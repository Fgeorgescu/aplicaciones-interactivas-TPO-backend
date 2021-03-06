'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consultas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  consultas.init({
    username: {
      allowNull: false,
      unique: true,
      defaultValue: [],
      type: DataTypes.STRING
    },
    consultas: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'consultas',
  });
  return consultas;
};