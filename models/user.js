const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../clients/db");

class User extends Model {}

  User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    email: {
      type : DataTypes.STRING,
      isUnique :true,
      allowNull:false,
      validate:{
          isEmail : true
       }
      },
      password: {
        type: DataTypes.STRING,
        allowNull:false,
      }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
