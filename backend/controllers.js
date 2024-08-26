const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Controller = {
    getLogin: async (_, res) => {
        try {
            res.json({ message: 'Welcome to the login page' })
        }
        catch (e) { res.status(500).json({ message: e.message }) };
    },

    createAccount: async (req, res) => {
        const { firstName, lastName, age, moviesPerWeek, platforms, genres, username, email, password } = req.body;
    },


    loginIntoAccount: async (req, res) => {
        try {
            const {username, password} = req.body;

        } catch (e) { res.status(500).json({ message: e.message }) };
    }
};

module.exports = Controller;