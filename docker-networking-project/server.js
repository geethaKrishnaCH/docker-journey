const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");

const Post = require("./models/Post");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

async function connectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
    console.log("Connected to database");
    app.listen(3000, () => console.log("Node server started on port: 3000"));
  } catch (err) {
    console.error(err);
  }
}

app.get("/posts", async (req, res) => {
  const postResponse = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.send(postResponse.data);
});

app.post("/favorite/posts", async (req, res) => {
  const post = new Post({
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
  });
  await post.save();
  res.send(post);
});

app.get("/favorite/posts", async (req, res) => {
  const posts = await Post.find();
  console.log(posts);
  res.send(posts);
});

connectToDB();
