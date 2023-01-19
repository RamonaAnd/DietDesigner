const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true
        },
        ingredients: [
            {
                type: String,
                trim: true
            }
        ],
        instructions: [
            {
                type: String,
                trim: true
            }
        ],
        cookTime: {
            type: Date,
            required: true
        },
        recipeCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'RecipeCategory'
        }
    }, 
    {
        timestamps: true
    }
);

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;