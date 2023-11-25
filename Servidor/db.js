const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const db = process.env.MONGODB_URI;

async function conectarDB() {

  try {
    await mongoose.connect(db);
    console.log(`Successful connection to database at ${db}`);
  } catch (err) {
    console.error('Error connecting to database:', err.message);
  }
}

module.exports = conectarDB;