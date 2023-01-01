const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const UserTypeModel = require('../models/user-type');
const UserModel = require('../models/user');

const userTypeModel = new UserTypeModel();
const userModel = new UserModel();

const register = asyncHandler(async (req, res) => {
    const { lastName, firstName, email, password } = req.body;

    if (!firstName)
        throw new Error('The firstName is missing from the request body!');

    if (!lastName)
        throw new Error('The lastName is missing from the request body!');

    if (!email)
        throw new Error('The email is missing from the request body!');

    if (!password)
        throw new Error('The password is missing from the request body!');

    const user = await userModel.selectOneByEmail(email);

    if (user)
        throw new Error('Email is already used by another user!');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userTypeId = await userTypeModel.selectOneIdByName('customer');

    await userModel.insert(firstName, lastName, email, hashedPassword, userTypeId);

    res.json({ message: 'You registered successfully!', severity: 'success' })
})

module.exports = { register };