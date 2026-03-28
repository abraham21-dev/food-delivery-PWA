const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Restaurant = require('./models/Restaurant');
require('dotenv').config();

const app = express();

// Middleware
// This allows your React app (5173) to get data from your Node server (5000)
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => console.error("❌ Connection error:", err));

// API Route for Restaurants & Search
app.get('/api/restaurants', async (req, res) => {
  const { query } = req.query;
  try {
    let filter = {};
    if (query) {
      // Searches both English and Amharic names
      filter = {
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { name_am: { $regex: query, $options: 'i' } }
        ]
      };
    }
    const data = await Restaurant.find(filter);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Database search failed" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});