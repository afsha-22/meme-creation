const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const sequelize = require('../../config/connection');

// api/post

//get all posts
router.get('/', async (req, res) => {
    try {

        const posts = await Post.findAll(
            { 
                include: [Comment, User],
                order: [sequelize.literal('like_count DESC')],
            }
        );
        
        res.status(200).json(posts);

    }
    catch (err) {
      res.status(400).json(err);
    }
});


//create a new post
router.post('/', async (req, res) => {
    try {

        const { image_caption, image_position, image_url_tiny, image_url_medium } = req.body;

        const userID = req.session.user_id;

        const request = {
            image_caption: image_caption,
            user_id: userID,
            image_url_tiny: image_url_tiny,
            image_url_medium: image_url_medium,
            image_position: image_position
        };

        const newPost = await Post.create(request);

        res.status(200).json(newPost);

    }
    catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;
