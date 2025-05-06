const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
const ingredientRoutes = require('./routes/ingredients');
app.use('/ingredient', ingredientRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Ingredient service running on port ${PORT}`));
