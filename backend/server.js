const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const generatorsRouter = require('./routes/generators');
const authenticationRouter = require('./routes/authentication');

app.use('/generate', generatorsRouter);
app.use('/auth', authenticationRouter);

const errorHandler = require('./middleware/error-middleware');

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});