const router = require('express').Router();

const generateUserTypes = require('../controllers/generators/user_types');
const generateAdmins = require('../controllers/generators/admins');

router.route('/user-types').get(generateUserTypes);
router.route('/admins').get(generateAdmins);

module.exports = router;