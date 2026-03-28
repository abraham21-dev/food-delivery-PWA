const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  name_am: { type: String, required: true },
  cuisine: { type: String, required: true },
  rating: { type: Number, default: 4.5 },
  deliveryTime: { type: String, default: "25-35 min" },
  distance: { type: String, default: "1.2 km away" },
  isFreeDelivery: { type: Boolean, default: true },
  image: { type: String, default: "https://images.unsplash.com/photo-1513104890138-7c749659a591" }
});

// THIS LINE IS CRITICAL
module.exports = mongoose.model('Restaurant', RestaurantSchema);