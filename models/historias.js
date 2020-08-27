'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  historias.init({
    username: {
      allowNull: false,
      unique:true,
      type: DataTypes.STRING
    },
    historia: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'historias',
  });
  return historias;
};