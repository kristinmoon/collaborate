const router = require('express').Router();
const userRoutes = require('./api/user-routes.js');
const boardRoutes = require('./api/board-routes.js');
const homeRoutes = require('./html/home-routes.js');
const profileRoutes = require('./html/profile-routes.js');
const singleBoardRoutes = require('./html/single-board-routes.js');

// api-routes
router.use('/users', userRoutes);
router.use('/boards', boardRoutes);

//html-routes
router.use('/', homeRoutes);
router.use('/profile', profileRoutes);
router.use('/board', singleBoardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
