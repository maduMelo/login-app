const express = require('express');
const router = express.Router();

const Controller = require('./controllers.js');


// GET request for the initial page
router
    .route('/')
    .get((req, res) => Controller.getLogin(req, res));


// GET request for getting the user's data
router
    .route('/profile')
    .get(Controller.checkToken, (req, res) => Controller.getProfile(req, res));


// POST request for creating a new user
router
    .route('/signup')
    .post((req, res) => Controller.createAccount(req, res));


// POST request for logging in a user
router
    .route('/')
    .post((req, res) => Controller.loginIntoAccount(req, res));


module.exports = router;