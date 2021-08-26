const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
     comments: {
      type: DataTypes.STRING,
     },
    
    post_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      references:{
        model: 'post',
        key: 'id',      
        }
      },
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;
