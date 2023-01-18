const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userTypeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxLength: 30
        }
    }, 
    {
        timestamps: true
    }
);

const UserType = mongoose.model('UserType', userTypeSchema);

module.exports = UserType;