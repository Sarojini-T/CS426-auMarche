/**
 * This file contains the API routes for the user service.
 * All imports must be the same. Just change the routes depending on what you need
 * Here, I only have a route that gets the location field of a user by name="Sarah"
 */

import express from "express";
import db from "./index.js"
import { ObjectId } from "mongodb";

const router = express.Router();

// GET city by storeName
router.get("/city", async (req, res) => {
  try {
    const { storeName } = req.body;
    // db.collection("users") lets me access the users collection of the usersDB database (as defined in index.js)
    const city = await db.collection("stores").find({ storeName: storeName }).project({ city: 1 }).toArray();
    res.status(200).json(city);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ingredients by storeName
router.get("/ingredients", async (req, res) => {
  try {
    const { storeName } = req.body;
    // get the collection document with storeName from the request body, then return the ingredients array
    const ingredients = await db.collection("stores").find({ storeName:storeName }).project({ ingredients: 1 }).toArray();
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST ingredient by storeName
router.post("/addIngredient", async (req, res) => {
  try {
    const { ingredient, storeName } = req.body;
    // get the collection document with storeName from request body, then push the ingredient in the req body to the ingredients array
    const ret = await db.collection("stores").updateOne({ storeName: storeName }, {$push: { ingredients: ingredient}})
    res.status(200).json({ ingredient, storeName });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
