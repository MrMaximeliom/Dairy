'use strict';
import db from '../models'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.role)
    }
  }
  user.init({
    username: DataTypes.STRING,
    first_name:DataTypes.STRING,
    last_name:DataTypes.STRING,
    password:DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      // allowNull: false
    },
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};