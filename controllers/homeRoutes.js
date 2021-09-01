//packages requrired
const router = require('express').Router();
const { Post, User, Comment } = require('../models')
const sequelize = require('../config/connection');
const getImages = require('../utils/pexel-search');

//authenication middleware
//ensures user is logged in
const checkAutenticiation = require('../utils/checkAuthentication');

//render home.handlebars
router.get('/', async (req, res) => {
    res.render('home', { loggedIn: req.session.loggedIn });

});

//render search-meme.handlebars

router.get('/search-meme', async (req, res) => {
    const images = await getImages('funny&per_page=12');
    res.render('search-meme', { images });
});

router.get('/create-meme/:photoID', async (req, res) => {
    const { photoID } = req.params;

    const selectedImageURL = `https://images.pexels.com/photos/${photoID}/pexels-photo-${photoID}.jpeg?auto=compress&cs=tinysrgb&h=350`

    res.render('create-meme', { selectedImageURL });
});

/// Render the login page.  If the user is logged in, redirect to the home page.
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

// Render the sign up page.  If the user is logged in, redirect to the home page.
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/resetPW', (req, res) => {

  res.render('resetPw');
});

module.exports = router;