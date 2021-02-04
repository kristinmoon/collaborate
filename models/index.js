const User = require('./user.js');
const Board = require('./board.js');

// associations
User.hasMany(Board, {
  foreignKey: 'user_id'
});

Board.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Board };
