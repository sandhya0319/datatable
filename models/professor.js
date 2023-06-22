'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      professor.belongsTo(models.course,{
        foreignKey:"course_id"
      })

      //polymorphic
      professor.hasMany(models.comment, {
        foreignKey: 'commentid',
        constraints: false,
        scope: {
          commmentype: 'professor'
        }
      });
    }
  }
  professor.init({
    name: DataTypes.STRING,
    qualification: DataTypes.STRING,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'professor',
  });
  return professor;
};