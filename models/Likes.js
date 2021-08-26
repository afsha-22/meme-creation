const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Likes extends Model {}

Likes.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },

    post_likes: {
      type: DataTypes.STRING,
    },

    post_ID: {
      type: DataTypes.UUID,
      references: {
        model: "post",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "likes",
  }
);

module.exports = Likes;
