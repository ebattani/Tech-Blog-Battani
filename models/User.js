const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');


User.init(

  {

    id: {

      type: DataTypes.INTEGER,

      allowNull: false,

      primaryKey: true,

      autoIncrement: true

    },

    username: {

      type: DataTypes.STRING,

      allowNull: false

    },

    password: {

      type: DataTypes.STRING,

      allowNull: false,

      validate: {

        len: [10]

      }
    }
  },
  {
    hooks: {


      async beforeCreate(newUser) {

        newUser.password = await bcrypt.hash(newUser.password, 15);

        return newUser;

      },

      async beforeUpdate(updatedUser) {

        updatedUser.password = await bcrypt.hash(updatedUser.password, 15);

        return updatedUser;

      }
    },

    sequelize,
    

    modelName: 'User'

  }
);

class User extends Model {


  checkPassword(passwordLog) {

    return bcrypt.compareSync(passwordLog, this.password);

  }
}

module.exports = User;