const router = require('express').Router();
const { Post, User, Comment, Like } = require('../../models');
const sequelize = require('../../config/connection');

// api/post

//get all posts
router.get('/', async (req, res) => {
    try {

        const posts = await Post.findAll({ include: [Comment, User, Like] });
 
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

        const userID = req.session.userID;

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

router.delete('/:postID', async (req, res) => {
    try {
  
        const { postID } = req.params;
  
        const deletePost = await Post.destroy({where: {id: postID}} );
        
        res.status(200).json(deletePost);
  
    }
    catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
