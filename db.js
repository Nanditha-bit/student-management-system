require('dotenv').config(); // ⬅️ Add this if missing

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ DB Error: ", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
