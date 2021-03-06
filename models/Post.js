const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image_caption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
        references:{
          model: 'user',
          key: 'id',      
        },
      },
    image_url_tiny: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_url_medium: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_position: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }

);

module.exports = Post;
