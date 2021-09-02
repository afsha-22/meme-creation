//packages requrired
const router = require('express').Router();

//import routes
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//define path
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Define a catch-all route for any resource that doesn't exist
// router.use((req, res) => {
//     res.status(404).end();
//   });
module.exports = router;
