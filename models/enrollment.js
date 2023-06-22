'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      enrollment.belongsTo(models.student,{
        foreignKey:"student_id"
      })
      enrollment.belongsTo(models.course,{
        foreignKey:"course_id"
      })
    }
  }
  enrollment.init({
    student_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'enrollment',
  });
  return enrollment;
};