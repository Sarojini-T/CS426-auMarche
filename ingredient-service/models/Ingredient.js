const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
  name: String,
  translations: {
    en: [String],
    ht: [String],
    ja: [String]
  },
  image: String,
  locations: [
    {
      name: String,
      address: String,
      zip: String,
      url: String
    }
  ]
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
