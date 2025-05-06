const express = require('express');
const router = express.Router();
const Ingredient = require('../models/Ingredient');

// GET /ingredient?query=garlic&lang=fr
router.get('/', async (req, res) => {
  const { query, lang } = req.query;
  try {
    const ingredients = await Ingredient.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { [`translations.${lang}`]: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(ingredients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /ingredient
router.post('/', async (req, res) => {
  const { name, translations } = req.body;
  try {
    const newIngredient = new Ingredient({ name, translations });
    await newIngredient.save();
    res.status(201).json(newIngredient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
