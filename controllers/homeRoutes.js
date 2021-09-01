//packages requrired
const router = require('express').Router();
const { Post, User, Comment } = require('../models')

const getImages = require('../utils/pexel-search');

//authenication middleware
//ensures user is logged in
const checkAutenticiation = require('../utils/checkAuthentication');

//render home.handlebars
router.get('/', async (req, res) => {
    //get all posts
    const postsRaw = await Post.findAll({ include: [User, Comment] });

    //TO DO - SORT BY MOST COMMENTED
    const mostCommented = postsRaw.map(post => post.get({ plain: true }))

   //TO DO - SORT BY MOST LIKED
    const mostLiked = postsRaw.map(post => post.get({ plain: true }))


    res.render('home', { mostCommented, mostLiked });
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


module.exports = router;