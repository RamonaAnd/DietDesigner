const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const UserType = require('../../models/user-type');

const generateAdmins = asyncHandler(async (_, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('test123', salt);

    const userTypeId = await UserType.findOne({name: 'admin'});

    const userRamona = await userModel.selectOneByEmail('ramona.andrei@stud.fh-campuswien.ac.at');

    if(!userRamona)
        await userModel.insert(['Andrei', 'Ramona', 'ramona.andrei@stud.fh-campuswien.ac.at', hashedPassword, userTypeId]);

    const userLea = await userModel.selectOneByEmail('lea.christa@stud.fh-campuswien.ac.at');

    if(!userLea)
        await userModel.insert(['Lea', 'Christa', 'lea.christa@stud.fh-campuswien.ac.at', hashedPassword, userTypeId]);
    
    const userHanaa = await userModel.selectOneByEmail('hanaa.alraei@stud.fh-campuswien.ac.at');

    if(!userHanaa)
        await userModel.insert(['Alraei', 'Hanaa', 'hanaa.alraei@stud.fh-campuswien.ac.at', hashedPassword, userTypeId]);

    res.json("All admins were generated successfully");
})

module.exports = generateAdmins;