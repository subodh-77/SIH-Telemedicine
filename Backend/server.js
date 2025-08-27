import express from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Path to a JSON file to store users (mock database)
const USERS_FILE = "./users.json";

// Helper: read users
const readUsers = () => {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
  }
  const data = fs.readFileSync(USERS_FILE, "utf-8");
  return JSON.parse(data);
};

// Helper: write users
const writeUsers = (users) => {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// GET all users
app.get("/user", (req, res) => {
  const users = readUsers();
  res.json(users);
});

// POST new user (signup)
app.post("/user", (req, res) => {
  const users = readUsers();
  const { firstName, lastName, email, gender, dob, userType } = req.body;

  if (!firstName || !lastName || !email || !gender || !dob) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if user already exists
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const newUser = { firstName, lastName, email, gender, dob, userType };
  users.push(newUser);
  writeUsers(users);

  res.status(201).json({ message: "User registered successfully", user: newUser });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
