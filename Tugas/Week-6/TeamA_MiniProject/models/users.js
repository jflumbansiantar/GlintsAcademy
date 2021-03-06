'use strict';
const {encryptPwd} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.belongsToMany(models.movies, {through: 'models.reviews'});
      users.hasMany(models.reviews);
    }
  };
  users.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Insert your name,please!"
        },
      }
    },
    image: {
    type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Upload your photo here!"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Insert your email address,please!"
        },
        isEmail : {
          msg : "Should filled by an email format, please!"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Filled the password please, thank you!"
        }
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : "User"
    },
  },
    {
      hooks : {
        beforeCreate(users, options) {
          users.password = encryptPwd(users.password)
        },
      },
      sequelize,
      modelName: 'users',
    });
    return users;
  };