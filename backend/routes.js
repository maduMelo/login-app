const express = require('express');
const router = express.Router();

const Controller = require('./controllers.js');


// GET request for the initial page
router
    .route('/')
    .get((req, res) => Controller.getLogin(req, res));


// POST request for creating a new user




// POST request for logging in a user




module.exports = router;