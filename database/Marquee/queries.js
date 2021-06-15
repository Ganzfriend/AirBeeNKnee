const MarqueeLocations = require('./MarqueeLocations.js');

const allListings = () => MarqueeLocations.find();

const listingWithId = (searchId) => {
  const query = MarqueeLocations.where({ id: searchId });
  return query.findOne();
};

exports.allListings = allListings;
exports.listingWithId = listingWithId;
