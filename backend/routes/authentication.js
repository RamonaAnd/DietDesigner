const router = require('express').Router();
const { register } = require('../controllers/authentication');

router.post('/register', register);
// router.post('/login', login);

module.exports = router;