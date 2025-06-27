// backend/routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const newEmployee = new Employee({ name, email, phone, city });
    await newEmployee.save();
    res.status(201).send("Employee saved ✅");
  } catch (err) {
    console.error("❌ Error saving to DB:", err.message);
    res.status(500).send("Error saving employee ❌");
  }
});

module.exports = router;
