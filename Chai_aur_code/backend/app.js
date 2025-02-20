const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user')


const app=express();
const PORT = 8000;

mongoose.connect('mongodb://127.0.0.1:27017/curd')
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/user",userRoute)

app.listen(PORT,()=> console.log(`Server started at PORT:${PORT}`))