const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')
const cors = require("cors");

const app=express();
const PORT = 8000;

app.use(cors({
  origin: "*",  // Allow frontend to access API
  methods: ["GET", "POST", "PUT", "DELETE"],  // Allowed HTTP methods
  credentials: true  // Allow cookies/auth headers
}));

mongoose.connect('mongodb://127.0.0.1:27017/curd-op')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/user",userRoute)
app.use(cors())

app.listen(PORT,()=> console.log(`Server started at PORT:${PORT}`))