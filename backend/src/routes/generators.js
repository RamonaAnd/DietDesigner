const router = require('express').Router();

const generateUserTypes = require('../controllers/generators/user_types');
const generateAdmins = require('../controllers/generators/admins');

router.get('/user-types', generateUserTypes);
router.get('/admins', generateAdmins);

module.exports = router;