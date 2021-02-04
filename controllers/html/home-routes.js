const router = require('express').Router();
const path = require("path");
const sequelize = require('../../config/connection');
const { Board, User } = require('../../models');

router.get('/', (req, res) => {
  console.log(req.session);
  Board.findAll({
    attributes: [
      'id',
      'board_content',
      'title',
      'description',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBoardData => {
      // pass a single board object into the homepage template
      const boards = dbBoardData.map(board => board.get({ plain: true }));
      res.render('homepage', {
        boards,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/board/:id', (req, res) => {
  Board.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'board_content',
      'title',
      'description',
      'created_at'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbBoardData => {
      if (!dbBoardData) {
        res.status(404).json({ message: 'No board found with this id' });
        return;
      }

      // serialize the data
      const board = dbBoardData.get({ plain: true });

      // pass data to template
      res.render('single-board', {
        board,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
