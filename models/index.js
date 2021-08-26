// import models
const User = require('./User');
const Comments = require('./Comments');
const Likes = require('./Likes');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
 
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
 
});

Post.belongsToMany(Likes, {

  foreignKey: ' post_ID:',
  
});

Comments.belongsToMany(Post, {
  foreignKey: 'post_id',
});

module.exports = {
User,
Comments,
Post,
Likes
};
