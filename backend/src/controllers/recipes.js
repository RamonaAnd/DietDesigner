const asyncHandler = require('express-async-handler')
const Recipe = require('../models/recipe');
const RecipeCategory = require('../models/recipe-category');
const { titleCase } = require('../utils/string');

const create = asyncHandler(async (req, res) => {
    const imageFile = req.file;
    const { name, ingredients, instructions, cookTime, category } = req.body;

    console.log(imageFile);
    console.log(req.body);

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

    let recipeCategory = await RecipeCategory.findOne({name: category});

    if(!recipeCategory)
    {
        recipeCategory = new RecipeCategory({name: category});
        await recipeCategory.save();
    }

    const newRecipe = new Recipe({ 
        name: name,  
        imageUri: imageFile.filename, 
        ingredients: ingredients.split(','),
        instructions: instructions,
        cookTime: cookTime,
        category: recipeCategory._id
    });

    await newRecipe.save();

    res.json({
        message: `The recipe was created successfully!`,
        severity: 'success',
        recipe: newRecipe
    })
})

const readById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const recipe = await Recipe.findById(id, { __v: 0 }).populate('category');

    res.json(recipe);
})

const readByCategory = asyncHandler(async (req, res) => {
    const { category } = req.params;

    const recipeCategory = await RecipeCategory.findOne({name: titleCase(category)});

    const recipes = await Recipe.find({category: recipeCategory._id}, { __v: 0 });

    res.json(recipes);
})

const readAll = asyncHandler(async (_req, res) => {
    res.json(await Recipe.find({}, { __v: 0 }));
})


module.exports = { create, readAll, readById, readByCategory };