const asyncHandler = require('express-async-handler');
const UserTypeModel = require('../../models/user-type');

const generateUserTypes = asyncHandler(async (_, res) => {
    const userTypeModel = new UserTypeModel();
    await userTypeModel.createTable();
    await userTypeModel.insert(['admin']);
    await userTypeModel.insert(['customer']);
    res.json("All user types were generated");
})

module.exports = generateUserTypes;