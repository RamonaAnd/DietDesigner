const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        imageUri: {
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
        instructions: {
            type: String,
            required: true,
            trim: true
        },
        cookTime: {
            type: Number,
            required: true
        },
        category: {
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