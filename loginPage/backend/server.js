// Import packages
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
// Create app
const app = express();

let users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));
// Middleware
app.use(cors()); // allow frontend to talk to backend
app.use(express.json()); // parse JSON requests

const JWT_SECRET = "mysecretkey";
// Test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});
console.log(users);
// Login route
app.post("/login", async (req, res) => {
  console.log("REQ BODY:", req.body);
  console.log("---- LOGIN ATTEMPT ----");
  console.log("REQ BODY:", req.body);
  console.log("EMAIL SENT:", req.body.email);
  console.log("ALL USERS:", users);
  console.log("------------------------");
  const { email, password } = req.body;

  const user = users.find(u => u.email.trim() === email.trim());
  console.log("FOUND USER:", user);
  if (!user) return res.status(400).json({ message: "User not found" });

  // Compare password
  const isMatch = password === user.password;
  if (!isMatch) return res.status(400).json({ message: "Incorrect password" });
  
  // Create JWT token
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

  res.json({ message: "Login successful!", token });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
