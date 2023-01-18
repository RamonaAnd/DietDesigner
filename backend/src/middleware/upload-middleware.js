const { getImagesFolderPath } = require('../utils/path');
const { split } = require('../utils/string');
const crypto = require('crypto');
const multer = require('multer');

const cbDeleteFile = (error) => {
    if (error)
        throw error
}

const storage = multer.diskStorage({
    destination: getImagesFolderPath(),
    filename: async (_req, file, cb) => {
        const fileExtension = split(file.originalname, '.', -1).toLocaleLowerCase();
        const uuid = crypto.randomUUID();
        const newFileName = `${uuid}.${fileExtension}`

        cb(null, newFileName);
    }
})

const upload = multer({
    storage: storage,
    fileFilter: function (_req, file, cb) {
        if (!file.originalname.toLocaleLowerCase().match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Only image files are allowed'));
        }
        cb(null, true);
    },
});

module.exports = { upload };