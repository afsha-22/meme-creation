
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

//bcrypt paasword 
class User extends Model {
  checkPassword(loginPW)
  {
    return bcrypt.compareSync(loginPw, this.password);
  }

}

  User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
    },

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
        validate:{
          len: [8],
        }
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
