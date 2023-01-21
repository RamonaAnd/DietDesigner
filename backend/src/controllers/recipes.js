const asyncHandler = require('express-async-handler')
const Recipe = require('../models/recipe');

const create = asyncHandler(async (req, res) => {
    const imageFile = req.file;
    const { name, ingredients, instructions, cookTime, category } = req.body;

    if (!imageFile)
        throw new Error('There was a problem when saving the image file!')

    if (!name)
        throw new Error('Field name it\'s missing from request body!');

    if (!ingredients)
        throw new Error('Field ingredients it\'s missing from request body!');

    if (!instructions)
        throw new Error('Field instructions it\'s missing from request body!');

    if (!cookTime)
        throw new Error('Field cookTime it\'s missing from request body!');

    if (!category)
        throw new Error('Field category it\'s missing from request body!');

    console.log(name);
    console.log(ingredients);
    console.log(instructions);
    console.log(cookTime);
    console.log(category);

    // const newPost = new Post({ imageUri: imageFile.filename, content });

    // await newPost.save();

    res.json({
        message: `The recipe was created successfully!`,
        severity: 'success'
    })
})

const readAll = asyncHandler(async (_req, res) => {
    res.json(await Recipe.find({}, { __v: 0 }));
})

module.exports = { create, readAll };