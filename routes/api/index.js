// Requiring the necessary dependencies
const router = require('express').Router();
const userRoutes = require('./userRoutes.js');

// Adding an additional paramter to the URL to direct the user to the correct endpoint
router.use('/user', userRoutes);

// Exporting this file so other files may access this file's information
module.exports = router