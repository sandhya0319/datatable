'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      course.belongsToMany(models.student, { through: 'course_student' });

      course.hasMany(models.enrollment, {
        foreignKey: "course_id"
      })

      course.hasMany(models.lesson, {
        foreignKey: "course_id"
      })

      course.hasOne(models.professor, {
        foreignKey: "course_id"
      })
    }
  }
  course.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};