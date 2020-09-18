 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ToDoList.init({
    task: DataTypes.STRING,
    status: DataTypes.STRING,
    tag: DataTypes.STRING,
    createdAt: DataTypes.INTEGER,
    completedAt: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ToDoList',
  });
  return ToDoList;
};