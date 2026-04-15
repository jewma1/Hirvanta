const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Enable CORS
app.use(cors());

// Use JSON middleware
app.use(express.json());

// GET / route
app.get('/', (req, res) => {
  res.send('Hirvanta backend running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});