//packages requrired
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const likeRoutes = require('./likeRoutes');

//defining routes
// e.g. api/user
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
router.use('/like', likeRoutes);

module.exports = router;
