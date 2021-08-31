//packages requrired
const router = require('express').Router();
const { Comment, User, Post } = require('../../models');

// api/comment

//get all comments

router.get('/', async (req, res) => {
    try {

        const comments = await Comment.findAll({ include: [Post, User] });
        res.status(200).json(comments);

    }
    catch (err) {
      res.status(400).json(err);
    }
});


//create a new comment
router.post('/', async (req, res) => {
    try {

        const { comment, post_id } = req.body;

        const userID = req.session.user_id;

        const request = {
            comment: comment,
            user_id: userID,
            post_id: post_id
        };

        const newComment = await Comment.create(request);

        res.status(200).json(newComment);

    }
    catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;
