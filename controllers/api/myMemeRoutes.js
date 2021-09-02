//packages requrired
const router = require('express').Router();
const { Post, User, Comment } = require('../../models')
const sequelize = require('../../config/connection');
const  { getOneImage, getImages } = require('../../utils/pexel-search');

//authenication middleware
//ensures user is logged in
const checkAutenticiation = require('../../utils/checkAuthentication');

//render home.handlebars
router.get('/', async (req, res) => {

    //get all posts by the user
    const postsRaw = await Post.findAll({ include: [User, Comment], where: {id: user_id} });

    res.render('home', { mostCommented, mostLiked, loggedIn: req.session.loggedIn });
});

/// Render the login page.  If the user is logged in, redirect to the home page.
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

router.get('/resetPW', (req, res) => {

  res.render('resetPw');
});

module.exports = router;