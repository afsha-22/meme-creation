const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
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
     user_id:{
      type: DataTypes.UUID,
      references:{
        model: 'user',
        key: 'id',      
        }
     } 
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;
