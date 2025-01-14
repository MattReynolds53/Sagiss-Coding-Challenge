// The following is requiring the necessary dependencies
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

// Here I am establishing a local connection via port 3001
const PORT = process.env.PORT || 3001
const app = express();

// Informing the app which parameters to use when executing the code. Also building pathways starting with app.use(routes);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
// The line of code above begins the pathway throughout the files and indiciates the correct URL routes for the user. Ctrl + click (or command + click) to follow.

// Using this code to direct the User to the local server and inform them the server is up and running properly
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on https://localhost:${PORT}!`)
    })
})