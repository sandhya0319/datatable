'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lesson extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      lesson.belongsTo(models.course,{
        foreignKey:"course_id"
      })
    }
  }
  lesson.init({
    course_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lesson',
  });
  return lesson;
};