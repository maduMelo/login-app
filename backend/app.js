const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());


const routes = require('./routes.js');
app.use('/', routes);

const connect = require('./db');
connect();

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;
