const path = require("path"); // 1. views folder ko use karne ke liye path ka use karte hai 
const express = require('express');
const userRoute = require('./routes/user')
const blogRoute = require('./routes/blog')
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const Blog = require('./models/blog')
const { checkForAuthenticationCookie } = require("./middlewares/authentication");

const app= express(); // 2. express js se ak app banaya jo 8000 port pe chalega 

const PORT = 8000;
mongoose.connect('mongodb://127.0.0.1:27017/blogify').then((e)=> console.log("Mongodb connectd"))

app.set("view engine","ejs"); // 3. nodejs ko bataya ki html ko show kar ne ke liye ejs ka use kar rahe hai 
app.set("views", path.resolve("./views")); // 4.html ke pages kaha hai vo bataya 

app.use(express.urlencoded({ extended: false})) // post se jo date send karte hai to body me json format me add karne ke liye 
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve('./public')))

app.get("/",async (req,res)=>{
    const allBlogs = await Blog.find({})
    res.render('home',{
        user: req.user,
        blogs: allBlogs,
    })
})
app.use("/user",userRoute);
app.use("/blog",blogRoute);


app.listen(PORT,()=> console.log(`server started at PORT: ${PORT}`)) // 5. app ko loaclhost pe host karne ke liye 