const router = require('express').Router();
const { Post } = require('../../models');

// api/post

//get all posts
router.get('/', async (req, res) => {
    try {

        const posts = await Post.findAll();
        res.status(200).json(posts);

    }
    catch (err) {
      res.status(400).json(err);
    }
});


//create a new post
router.post('/', async (req, res) => {
    try {

        const { imageCaption, image_url, image_position } = req.body;

        const userID = req.session.user_id;

        const request = {
            image_caption: imageCaption,
            user_id: userID,
            image_url: image_url,
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
