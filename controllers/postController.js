const multer = require("multer");
const Post = require("../model/Post");
// const nodemailer = require("nodemailer")
const { serverError, resourceError } = require("../utils/error");
const postValidator = require("../validator/postValidator");

module.exports = {
  create(req, res) {
    let {
      title,
      description,
      image,
      category,
      tag,
      author,
      file,
      comments,
      isPublished,
    } = req.body;
    console.log(req.file);
    return;
    let validate = postValidator({ title, description, category, tag, author });

    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    } else {
      file.mv(`${__dirname}/../client/public/uploads/${file.name}`, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json(err);
        }
      });

      let post = new Post({
        title,
        description,
        image,
        category,
        tag,
        author,
        image: file.name,
        comments,
        isPublished,
      });
      post
        .save()
        .then((post) => {
          return res.status(201).json({
            ...post._doc,
          });
        })
        .catch((error) => serverError(res, error));
    }
  },

  getAll(req, res) {
    Post.find()
      .then((posts) => {
        if (posts.length === 0) {
          return res.status(200).json({
            message: "No Post Found",
          });
        } else {
          return res.status(200).json(posts);
        }
      })
      .catch((error) => serverError(res, error));
  },

  getSinglePost(req, res) {
    let { id } = req.params;

    Post.findById(id)
      .then((post) => {
        if (!post) {
          return res.status(200).json({
            message: "No post Found",
          });
        } else {
          return res.status(200).json(post);
        }
      })
      .catch((error) => serverError(res, error));
  },

  update(req, res) {
    let { id } = req.params;
    let { title, description } = req.body;
    Post.findById(id)
      .then((post) => {
        post.title = title;
        post.description = description;
        Post.findOneAndUpdate({ _id: id }, { $set: post }, { new: true })
          .then((result) => {
            return res.status(201).json({
              message: "Updated Successfully",
              ...result._doc,
            });
            // console.log(result)
          })
          .catch((error) => serverError(res, error));
      })
      .catch((error) => serverError(res, error));
  },

  remove(req, res) {
    let { id } = req.params;
    Post.findOneAndDelete({ _id: id })
      .then((result) => {
        return res.status(204).json({
          message: "Deleted Successfully",
          ...result._doc,
        });
      })
      .catch((error) => serverError(res, error));
  },

  updateSolved(req, res) {
    let { id } = req.params;
    post
      .findById(id)
      .then((post) => {
        post.isComplete = !post.isComplete;
        post
          .findOneAndUpdate({ _id: id }, { $set: post }, { new: true })
          .then((result) => {
            return res.status(200).json({
              message: "Updated Successfully Solved",
              ...result._doc,
            });
          })
          .catch((error) => serverError(res, error));
      })
      .catch((error) => serverError(res, error));
  },

  imageUpload(req, res) {
    const { id } = req.params;
    if (req.files === null) {
      return res.status(400).json({ msg: "No file uploaded" });
    }

    const file = req.files.file;

    file.mv(`${__dirname}/../client/public/uploads/${file.name}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      post
        .findById(id)
        .then((post) => {
          post.image = `/uploads/${file.name}`;
          post
            .findOneAndUpdate({ _id: id }, { $set: post }, { new: true })
            .then((result) => {
              return res.status(200).json({
                message: "Image Updated Successfully",
                ...result._doc,
              });
            })
            .catch((error) => serverError(res, error));
        })
        .catch((error) => serverError(res, error));

      // res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
  },
};
