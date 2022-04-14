// Requiring the necessary dependencies
const { connect, connection } = require('mongoose');

// Here I am creating a local connection to the default mongodb port 27017
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/userDB'

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Exporting this file so other files may access this file's information
module.exports = connection;

