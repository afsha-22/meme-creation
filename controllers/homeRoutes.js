//packages requrired
const router = require("express").Router();
const { Post, User, Comment, Like } = require("../models");
const sequelize = require("../config/connection");
const { getOneImage, getImages } = require("../utils/pexel-search");

//authenication middleware
//ensures user is logged in
const checkAutenticiation = require("../utils/checkAuthentication");

//render home.handlebars
router.get("/", checkAutenticiation, async (req, res) => {
  //get all posts
  const postsRaw = await Post.findAll({ include: [Comment, User, Like] });

  //SORT BY MOST COMMENTED
  const mostCommentedRaw = postsRaw.sort((a, b) =>
    a.comments.length < b.comments.length ? 1 : -1
  );
  const mostCommentedAll = mostCommentedRaw.map((post) =>
    post.get({ plain: true })
  );
  const mostCommented = mostCommentedAll.slice(0, 4);

  //SORT BY MOST LIKED
  const mostLikedRaw = postsRaw.sort((a, b) =>
    a.likes.length < b.likes.length ? 1 : -1
  );
  const mostLikedAll = mostLikedRaw.map((post) => post.get({ plain: true }));
  const mostLiked = mostLikedAll.slice(0, 4);

  //render home with most liked and commented posts

  res.render("home", {
    mostCommented,
    mostLiked,
    loggedIn: req.session.loggedIn,
  });
});

//render profile.handlebars
router.get("/profile", checkAutenticiation, async (req, res) => {
  //get all posts for user logged in
  const postsRaw = await Post.findAll({
    where: { user_id: req.session.userID },
    include: [Comment, User, Like],
  });
  const posts = postsRaw.map((post) => post.get({ plain: true }));

  //render users profile with all posts

  res.render("profile", { posts, loggedIn: req.session.loggedIn });
});

//render meme.handlebars
router.get("/meme/:id", checkAutenticiation, async (req, res) => {
  const postID = req.params.id;

  //get post where matching postID
  const postRaw = await Post.findOne({
    where: { id: postID },
    include: [Comment, User, Like],
  });
  const post = postRaw.get({ plain: true });

  //get post where matching postID
  const commentsRaw = await Comment.findAll({
    where: { post_id: postID },
    include: User,
  });
  const comments = commentsRaw.map((comment) => comment.get({ plain: true }));

  const likeCount = post.likes.length;
  const commentCount = post.comments.length;

  //render view-meme with indivual post

  res.render("view-meme", {
    post,
    comments,
    likeCount,
    commentCount,
    loggedIn: req.session.loggedIn,
  });
});

//render search-meme.handlebars

router.get("/search-meme", checkAutenticiation, async (req, res) => {
  const userName = req.session.userName;
  const images = await getImages("funny&per_page=12");
  res.render("search-meme", { images, userName });
});

router.get("/create-meme/:id", checkAutenticiation, async (req, res) => {
  const { id } = req.params;
  const image = await getOneImage(id);

  res.render("create-meme", { image });
});

/// Render the login page.  If the user is logged in, redirect to the home page.
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Render the sign up page.  If the user is logged in, redirect to the home page.
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/passwordreset", (req, res) => {
  res.render("PasswordReset");
});

router.get("/comment", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("comment");
});

module.exports = router;
