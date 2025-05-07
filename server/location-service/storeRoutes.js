/**
 * This file contains the API routes for the user service.
 * All imports must be the same. Just change the routes depending on what you need
 * Here, I only have a route that gets the location field of a user by name="Sarah"
 */

import express from "express";
import db from "./index.js"
import { ObjectId } from "mongodb";

const router = express.Router();

// GET location by name
router.get("/storeLocation", async (req, res) => {
  try {
    // db.collection("users") lets me access the users collection of the usersDB database (as defined in index.js)
    const city = await db.collection("stores").find({storeName:"Mum's House"}).project({city: 1}).toArray();
    res.status(200).json(city);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
