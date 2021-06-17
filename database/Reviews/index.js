const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || require("../uri.js");

// const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
module.exports = db;
