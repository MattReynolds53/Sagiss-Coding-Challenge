const { connect, connection } = require('mongoose');

// Here I am creating a local connection to the default mongodb port 27017
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/'

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;

