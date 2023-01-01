const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const generatorsRouter = require('./routes/generators');
const authenticationRouter = require('./routes/authentication');

app.use('/generate', generatorsRouter);
app.use('/auth', authenticationRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});