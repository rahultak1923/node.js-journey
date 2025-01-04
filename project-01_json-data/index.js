const express = require("express")
// const { json } = require("stream/consumers");

const userRouter = require('./routes/user');
const { connectMongoDb } = require("./connection");

const app = express();
const PORT = 8001;

// connection
connectMongoDb('mongodb://127.0.0.1:27017/nodejs-learning')

// Schema 


// middleware plugin
app.use(express.urlencoded({ extended: false }))

// Routes


// app.get('/user', async (req, res) => {
//     const alldbuser = await User.find({});
//     const html = `
//     <ul>
//     ${alldbuser.map((user) => `<li>${user.first_name}<br> ${user.email}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// })



app.use("/api/user",userRouter);

app.listen(PORT, () => console.log(`server started at http/localhost:${PORT}`))