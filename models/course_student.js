'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course_student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      course_student.belongsTo(models.student, { foreignKey: 'student_id' });
      course_student.belongsTo(models.course, { foreignKey: 'course_id' });
    }
  }
  course_student.init({
    course_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course_student',
  });
  return course_student;
};