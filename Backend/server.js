const express = require("express");
const app = express();
require("dotenv").config();
const db = require("./db");

const cors = require('cors');
app.use(cors());
// Middleware
app.use(express.json());

// Routes
const Userroute = require("./Routes/Userroute");
app.use("/user", Userroute);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
