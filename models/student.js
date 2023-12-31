'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student.belongsToMany(models.course, { through: 'course_student' });

      student.hasMany(models.enrollment, {
        foreignKey: "student_id"
      })

      //polymorphic
      student.hasMany(models.comment, {
        foreignKey: 'commentid',
        constraints: false,
        scope: {
          commmentype: 'student'
        }
      });
    }
  }
  student.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};