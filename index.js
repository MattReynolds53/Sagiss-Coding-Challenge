// The following is requiring the necessary dependencies
const express = require('express');
const db = require('./config/connection');
const routes = requires('./routes');

const cwd = process.cwd();

// Here I am establishing a local connection via port 3001
const PORT = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on https://localhost:${PORT}!`)
    })
})