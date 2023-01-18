const asyncHandler = require('express-async-handler');
const UserType = require('../../models/user-type');
const UserTypeModel = require('../../models/user-type');

const generateUserTypes = asyncHandler(async (_, res) => {
    const adminUserType = new UserType({name: 'admin'});
    const customerUserType = new UserType({name: 'customer'});

    await adminUserType.save();
    await customerUserType.save();

    res.json("All user types were generated");
})

module.exports = generateUserTypes;