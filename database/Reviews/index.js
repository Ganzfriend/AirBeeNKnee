const mongoose = require('mongoose');
const uri = require('../uri.js');

// const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
module.exports = db;
