'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comment.belongsTo(models.student, { foreignKey: 'commentid', constraints: false });
      comment.belongsTo(models.professor, { foreignKey: 'commentid', constraints: false });
    }
  }
  comment.init({
    comment: DataTypes.STRING,
    commentid: DataTypes.INTEGER,
    commmentype: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comment',
  });
  return comment;
};