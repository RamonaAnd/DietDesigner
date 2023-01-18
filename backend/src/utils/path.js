const { dirname, join } = require('path');

const getUtilsFolderPath = () => module.path;

const getSrcFolderPath = () => dirname(module.path);

const getPublicFolderPath = () => join(getSrcFolderPath(), 'public');

const getPublicFolderFilePath = (fileName) => join(getPublicFolderPath(), fileName);

const getImagesFolderPath = () => join(getPublicFolderPath(), 'images');

const getImagesFolderFilePath = (fileName) => join(getImagesFolderPath(), fileName);

module.exports = {
    getUtilsFolderPath, 
    getSrcFolderPath,
    getPublicFolderPath,
    getPublicFolderFilePath,
    getImagesFolderPath,
    getImagesFolderFilePath
};