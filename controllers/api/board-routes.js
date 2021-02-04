const router = require('express').Router();

const { User, Board } = require('../../models');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');


// GET /boards
router.get('/', (req, res) => {
  Board.findAll({
    order: [['created_at', 'DESC']],
    attributes: [
      'id',
      'title',
      'description',
      'board_content',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['user_id']
      }
    ]
  })
    .then(dbBoardData => res.json(dbBoardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /boards/1
router.get('/:id', (req, res) => {
  Board.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'description',
      'board_content',
      'created_at',
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
      res.json(dbBoardData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /boards
router.post('/', (req, res) => {
  Board.create({
    title: req.body.title,
    description: req.body.description,
    board_content: JSON.stringify(req.body.board_content),
    user_id: req.session.user_id,
  })
    .then(dbBoardData => res.json(dbBoardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/boards/1
router.put('/:id', (req, res) => {
  Board.update({
    title: req.body.title,
    description: req.body.description,
    board_content: JSON.stringify(req.body.board_content),
  },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbBoardData => {
      if (!dbBoardData) {
        res.status(404).json({ message: 'No board found with this id' });
        return;
      }
      res.json(dbBoardData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/boards/1
router.delete('/:id', (req, res) => {
  Board.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbBoardData => {
      if (!dbBoardData) {
        res.status(404).json({ message: 'No board found with this id' });
        return;
      }
      res.json(dbBoardData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
