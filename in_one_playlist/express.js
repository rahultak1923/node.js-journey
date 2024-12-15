const http = require ("http");
const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    return res.send("hello this is home pages")
})

app.get("/about",(req, res)=>{
    // http://localhost:8000/about?name=rahul
    return res.send("this is about pages "+req.query.name)
})

const myserver = http.createServer(app);

myserver.listen(8000, ()=> console.log("server started"))