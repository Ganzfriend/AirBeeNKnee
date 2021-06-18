const mongoose = require("mongoose");
const db = require("./index.js");

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("MongoDB is all connected, folks!");
});

const marqueeLocationSchema = new mongoose.Schema({
  id: Number,
  title: String,
  host: String,
  location: String,
  rating: Number,
  pictures: Array,
  guests: Number,
  bedrooms: Array,
  bathrooms: Number,
  price: Number,
  description: String,
  amenities: Array,
  policies: Array,
});

const MarqueeLocations = mongoose.model(
  "MarqueeLocations",
  marqueeLocationSchema
);

module.exports = MarqueeLocations;
