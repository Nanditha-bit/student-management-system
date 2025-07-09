const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
