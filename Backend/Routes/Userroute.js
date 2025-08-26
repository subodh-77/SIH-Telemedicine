const express = require("express");
const router = express.Router();
const User = require("../Models/User");

// POST API to create user
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, dob, gender } = req.body;

    const newUser = new User({ firstName, lastName, email, dob, gender });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET API to fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
