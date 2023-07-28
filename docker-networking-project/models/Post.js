const mongoose = require("mongoose");

const Post = mongoose.model("Post", {
  userId: Number,
  title: String,
  body: String,
});

module.exports = Post;
