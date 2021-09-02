//packages requrired
const router = require('express').Router();
const { Post, User, Comment } = require('../models')
const sequelize = require('../config/connection');
const  { getOneImage, getImages } = require('../utils/pexel-search');

//authenication middleware
//ensures user is logged in
const checkAutenticiation = require('../utils/checkAuthentication');

//render home.handlebars
router.get('/', async (req, res) => {

    //SORT BY MOST COMMENTED
    const mostCommentedRaw = await Post.findAll(
      { 
          include: [Comment, User],
          order: [sequelize.literal('like_count DESC')],
          limit: 4
      }
    );
    
    const mostCommented = mostCommentedRaw.map(post => post.get({ plain: true }))

    //SORT BY MOST LIKED
    const mostLikedRaw = await Post.findAll(
      { 
        include: [Comment, User],
        order: [sequelize.literal('comment_count DESC')],
        limit: 4
      }
    );

    const mostLiked = mostLikedRaw.map(post => post.get({ plain: true }))

    //render home with most liked and commented posts

    res.render('home', { mostCommented, mostLiked, loggedIn: req.session.loggedIn });

});

//render search-meme.handlebars

router.get('/search-meme', checkAutenticiation,  async (req, res) => {
    const userName = req.session.userName;
    const images = await getImages('funny&per_page=12');
    res.render('search-meme', { images, userName });
});

router.get('/create-meme/:id', checkAutenticiation, async (req, res) => {
    const { id } = req.params;
    const image = await getOneImage(id);

    res.render('create-meme', { image });
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