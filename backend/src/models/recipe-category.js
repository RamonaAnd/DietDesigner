const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        }
    }, 
    {
        timestamps: true
    }
);

const RecipeCategory = mongoose.model('RecipeCategory', recipeCategorySchema);

module.exports = RecipeCategory;