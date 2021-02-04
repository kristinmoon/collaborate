const sequelize = require('../../config/connection');
const { User, Board } = require('../../models');

const userdata = [
  {
    username: 'kwaite',
    email: 'kwaite@gmail.com',
    password: 'password'
  },
  {
    username: 'dbrown',
    email: 'dbrown@gmail.com',
    password: 'password'
  },
  {
    username: 'ddicus',
    email: 'ddicus@gmail.com',
    password: 'password'
  },
  {
    username: 'ccalleros',
    email: 'ccalleros@gmail.com',
    password: 'password'
  },
  {
    username: 'cbokowski',
    email: 'cbokowski@gmail.com',
    password: 'password'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
