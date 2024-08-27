const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('./userModel.js');


const Controller = {
    getLogin: async (_, res) => {
        try {
            res.json({ message: 'Welcome to the login page' })
        }
        catch (e) { res.status(500).json({ message: e.message }) };
    },

    createAccount: async (req, res) => {
        try {
            const { firstName, lastName, age, moviesPerWeek, platforms, genres, username, email, password } = req.body;

            // Validating the input
            if ([firstName, lastName, age, moviesPerWeek, platforms, genres, username, email, password].includes(null)) {
                return res.status(422).json({ message: 'Please fill in all fields' });
            };

            // Checking if the user already exists
            const userExists = await User.findOne({ username });
            if (userExists) return res.status(409).json({ message: 'User already exists' });

            // Hashing the password
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Creating a new user
            const newUser = new User({
                firstName,
                lastName,
                age,
                moviesPerWeek,
                platforms,
                genres,
                username,
                email,
                password: hashedPassword
            });
            await newUser.save();

            res.status(201).json({ message: 'User created successfully' });
        }
        catch (error) { res.status(500).json({ message: error.message }) };
    },

    loginIntoAccount: async (req, res) => {
        try {
            const {username, password} = req.body;

            // Validating the input
            if ([username, password].includes(null)) return res.status(422).json({ message: 'Please fill in all fields' });

            // Checking if the user exists
            const user = await User.findOne({ username });
            if (!user) return res.status(401).json({ message: 'Invalid credentials' });

            // Checking the password
            const isPasswordCorrect = await bcrypt.compare(password, user.password);
            if (!isPasswordCorrect) return res.status(401).json({ message: 'Invalid credentials' });

            // Creating access token
            const secret = process.env.TOKEN_SECRET;
            const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });

            res.status(200).json({ message: 'Logged in successfully', token });

        } catch (e) { res.status(500).json({ message: e.message }) };
    },

    getProfile: async (req, res) => {
        try {
            const userID = req.user.id;

            const user = await User.findById(userID, '-password');
            console.log('USER', user);

            res.status(200).json(user);
        }
        catch (e) { res.status(500).json({ message: e.message }) };
    },

    checkToken: async (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) return res.status(401).json({ message: 'Unauthorized' });

        const secret = process.env.TOKEN_SECRET;
        try {
            const decoded = jwt.verify(token, secret);
            req.user = decoded;
            next(null, decoded);
        }
        catch (e) { res.status(403).json({ message: 'Invalid token' }) };
    }
};

module.exports = Controller;