const mongoose = require('mongoose');
const Restaurant = require('./models/Restaurant');
require('dotenv').config();

async function seed() {
  console.log("🔍 Attempting to connect to MongoDB Atlas...");
  
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Connected Successfully!");

    const ethiopianRestaurants = [
      {
        name: "Yod Abyssinia",
        name_am: "ዮድ አቢሲኒያ",
        cuisine: "Traditional • ቁርስ",
        rating: 4.9,
        deliveryTime: "30-40 min",
        distance: "0.8 km",
        isFreeDelivery: true,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
      },
      {
        name: "Burger Queen",
        name_am: "በርገር ክዊን",
        cuisine: "Burgers • ፒዛ",
        rating: 4.5,
        deliveryTime: "20-25 min",
        distance: "1.5 km",
        isFreeDelivery: true,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
      }
    ];

    console.log("🧹 Cleaning old data...");
    await Restaurant.deleteMany({});
    
    console.log("📤 Inserting new restaurants...");
    await Restaurant.insertMany(ethiopianRestaurants);
    
    console.log("🎉 SUCCESS: Database Seeded!");
  } catch (err) {
    console.error("❌ ERROR DURING SEEDING:", err.message);
  } finally {
    mongoose.connection.close();
    console.log("🔌 Connection closed.");
  }
}

seed();