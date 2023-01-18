const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }, 
    {
        timestamps: true
    }
);

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;