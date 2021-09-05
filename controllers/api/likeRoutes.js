//packages requrired
const router = require('express').Router();
const { Like, Post, User } = require('../../models');

// api/like

//get all likes

router.get('/', async (req, res) => {
    try {

        const likes = await Like.findAll({ include: [Post, User] });
        res.status(200).json(likes);

    }
    catch (err) {
      res.status(400).json(err);
    }
});


//create a new like
router.post('/', async (req, res) => {
    try {

        const { post_id } = req.body;

        const userID = req.session.userID;

        const request = {
            user_id: userID,
            post_id: post_id
        };

        const newLike = await Like.create(request);

        res.status(200).json(newLike);

    }
    catch (err) {
      res.status(400).json(err);
    }
});



module.exports = router;
