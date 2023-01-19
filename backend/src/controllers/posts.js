
const asyncHandler = require('express-async-handler')
const Post = require('../models/post');

const create = asyncHandler(async (req, res) => {
    const imageFile = req.file;
    const { content } = req.body;

    if (!imageFile)
        throw new Error('There was a problem when saving the image file!')

    if (!content)
        throw new Error('Field content it\'s missing from request body!');

    const newPost = new Post({ imageUri: imageFile.filename, content });

    await newPost.save();

    res.json({
        message: `The post was created successfully!`,
        severity: 'success',
        post: newPost
    })
})

const readAll = asyncHandler(async (_req, res) => {
    res.json(await Post.find({}, { __v: 0 }));
})

module.exports = { create, readAll };