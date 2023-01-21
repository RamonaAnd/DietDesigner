const router = require('express').Router();

const { create, readAll, readByCategory } = require('../controllers/recipes');
const { upload } = require('../middleware/upload-middleware');

router.post('', [upload.single('imageFile')], create);
router.get('/category/:category', readByCategory);
router.get('', readAll);

module.exports = router;