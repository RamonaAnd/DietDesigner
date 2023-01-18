
const asyncHandler = require('express-async-handler')
const Post = require('../models/post');

const create = asyncHandler(async (req, res) => {
    const { content } = req.body;

    if (!content)
        throw new Error('Campul content lipseste din corpul cererii!');

    // const user = await Post.findOne({ email });

    // if (user)
    //     throw new Error('Email-ul este deja folosit de alt utilizator!');
  
    // const hashedPassword = await generatePasswordHash(password);

    // const newUser = new User({lastName, firstName, email, password: hashedPassword });

    // await newUser.save();

    // res.json({message: `Utilizatorul ${lastName} ${firstName} a fost creat cu succes!`})
    res.json({ok: 'ok'})
})

const readAll = asyncHandler(async (_req, res) => {
    res.json(await Post.find({}, { __v: 0 }));
})

module.exports = { create, readAll };