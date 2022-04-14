// Requiring the necessary dependencies
const router = require('express').Router();
const apiRoutes = require('./api');

// Adding paramters to the URL to direct the user to the proper endpoint
router.use('/api', apiRoutes);
router.use((req, res) => res.send('Wrong route. Please try another route.'));

// Exporting this file so other files may access this file's information
module.exports = router;