const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://surya:korada2003@cluster0.hrxwb1k.mongodb.net/tutorials?retryWrites=true&w=majority&appName=Cluster0"
).then(() => {
  console.log("MongoDB connected ✅");
}).catch(err => {
  console.log("MongoDB Error ❌", err);
});


app.use('/api/employees', employeeRoutes);
 
app.get("/", (req, res) => {
  res.send("Backend Working ✅");
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

