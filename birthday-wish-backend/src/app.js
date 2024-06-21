const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/database');
const wishRoutes = require('./routes/wishRoutes');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to database
connectDatabase();

// Routes
app.use('/api/wishes', wishRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});