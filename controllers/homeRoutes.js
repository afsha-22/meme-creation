//packages requrired
const router = require('express').Router();
const { Post, User, Comment } = require('../models')

//authenication middleware
//ensures user is logged in
const checkAutenticiation = require('../utils/checkAuthentication');

//render home.handlebars
router.get('/', async (req, res) => {
    res.render('home');
});

module.exports = router;