const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./user.js');

class Board extends Model { }

Board.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(750),
      allowNull: false
    },
    board_content: {
      type: DataTypes.TEXT(),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'board'
  }
);

module.exports = Board;
