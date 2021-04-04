const mongoose = require("mongoose");
const PostMessage = require("../models/postsSchema");
const getPosts = async (req, res) => {
  try {
    console.log("postmsg", PostMessage);
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id = _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("no post with that id found");
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { ...post, id },
    {
      new: true,
    }
  );
  res.json(updatedPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("no post with that id found");
  }
  await PostMessage.findByIdAndRemove(id);
  res.json({ message: "post deleted succesfully" });
};

const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("no post with that id");

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(
    id,
    { likeCount: post.likeCount + 1 },
    { new: true }
  );
  res.json(updatePost);
};

module.exports = { getPosts, createPost, updatePost, deletePost, likePost };
