const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const dbName = process.env.DB_NAME;

const connectionstring = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/?retryWrites=true&w=majority&appName=${dbName}`;

async function connect() {
    try {
        await mongoose.connect(connectionstring);
        console.log('Connection to the database was successful');
    } catch (e) { console.error(e) };
};


module.exports = connect;