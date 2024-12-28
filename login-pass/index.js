const express = require("express")
const { connectMongoDb } = require("./connection");
const userRoute = require("./routes/user")
const path = require('path')
const staticRoute = require("./routes/staticRouter")

connectMongoDb('mongodb://127.0.0.1:27017/login-pass-learning')

const app= express();
const PORT = 8000;

app.use(express.urlencoded({extended: false}))

app.set("view engine","ejs");
app.set("views", path.resolve("./views"))

app.use("/user", userRoute)
app.use('/',staticRoute);

app.listen(PORT,()=> console.log(`server started at http/localhost:${PORT}`))