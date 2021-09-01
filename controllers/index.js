//packages requrired
const router = require('express').Router();

//import routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//define path
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
