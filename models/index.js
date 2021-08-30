// import models
const User = require('./User');
const Comments = require('./Comment');
const Like = require('./Like');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
 
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
 
});

Post.hasMany(Comment, {

  foreignKey: 'post_id:',
  
});
Post.hasMany(Like, {

  foreignKey: 'post_id:',
  
});
Like.belongsTo(Post,{

  foreignKey: 'post_id:',

});
Comments.belongsTo(Post, {
  foreignKey: 'post_id',
});

module.exports = {
User,
Comments,
Post,
Like
};
