const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../../models/user');
const UserType = require('../../models/user-type');

const generateAdmins = asyncHandler(async (_, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('test123', salt);

    let userType = await UserType.findOne({name: 'admin'});

    if(!userType)
    {
        userType = new UserType({name: 'admin'});
        await userType.save();
    }

    const userRamona = await User.findOne({email: 'ramona.andrei@stud.fh-campuswien.ac.at'});

    if(!userRamona)
    {
        await new User({
            firstName: 'Ramona',
            lastName: 'Andrei',
            email: 'ramona.andrei@stud.fh-campuswien.ac.at',
            password: hashedPassword,
            userType: userType._id
        }).save()
    }

    const userLea = await User.findOne({email: 'lea.christa@stud.fh-campuswien.ac.at'});

    if(!userLea)
    {
        await new User({
            firstName: 'Christa',
            lastName: 'Lea',
            email: 'lea.christa@stud.fh-campuswien.ac.at',
            password: hashedPassword,
            userType: userType._id
        }).save()
    }

    const userHanaa = await User.findOne({email: 'hanaa.alraei@stud.fh-campuswien.ac.at'});

    if(!userHanaa)
    {
        await new User({
            firstName: 'Hanaa',
            lastName: 'Alraei',
            email: 'hanaa.alraei@stud.fh-campuswien.ac.at',
            password: hashedPassword,
            userType: userType._id
        }).save()
    }

    res.json("All admins were generated successfully");
})

module.exports = generateAdmins;