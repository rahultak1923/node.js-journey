const express = require("express")
const fs = require("fs")
// const user = require("./MOCK_DATA.json");
const mongoose = require("mongoose")
const { json } = require("stream/consumers");

const app = express();
const PORT = 8000;

// connection
mongoose.connect('mongodb://127.0.0.1:27017/nodejs-learning').then(() => console.log("mongoDB cannect ")).catch((err) => console.log("mongo Error", err))

// Schema 
// this is a schema define 
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true,
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        // unique: true  // same email do no repeat a create a new user 
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    }
})

// this is a schema model 
const User = mongoose.model("user", userSchema)


// middleware plugin
app.use(express.urlencoded({ extended: false }))

// Routes
app.get('/api/user', async(req, res) => {
    const alldbuser = await User.find({});
    // create a header jab api de deta aayega to ye header show hoga 
    res.setHeader("myname", "rahul tak")
    // console.log(req.headers)
    return res.json(alldbuser);
})

app.get('/user', async (req, res) => {
    const alldbuser = await User.find({});
    const html = `
    <ul>
    ${alldbuser.map((user) => `<li>${user.first_name}<br> ${user.email}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

// Dyaminc path parameters 
app.get('/api/user/:id', async (req, res) => {
    const users = await User.findById(req.params.id)
    if (!users) {
        return res.status(404).json({ mes: "user not found" })
    }
    return res.json(users);
})

app.post('/api/user',async (req, res) => {
    // create new user 
    // josn ko pata nhi hota hai ki kis tarh ke data aane wala hai is liye puligin ka use karte hai
    const body = req.body;
    // if condision agar data full nhi aaya to status 400 bad request 
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ mes: "all felds are req..." })
    }
    // json se post karna 

    // user.push({ ...body, id: user.length + 1 });
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(user), (err, data) => {
    //     // staus code 201 add kar ne se post request jane ke baad agar process ok rahi to 201 status show hoga 
    //     return res.status(201).json({ status: "sucess", id: user.length })

    // })

    // mongodb se post request send karna

    const result = await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,
    });
    // console.log("result",result);
    return res.status(201).json({mes: "sucess"})

})

app.patch("/api/user/:id", async(req, res) => {
    await User.findByIdAndUpdate(req.params.id, {last_name: "udiaapa"})
    // edit user with id
    return res.json({ status: "update" })
})
 
// this delete reques using by json file 

// app.delete("/api/user/:id", (req, res) => {
//     const id = Number(req.params.id);

//     // Check if the user exists
//     const userIndex = user.findIndex((u) => u.id === id);
//     if (userIndex === -1) {
//         return res.status(404).json({ status: "error", message: "User not found" });
//     }

//     // Remove the user from the array
//     user.splice(userIndex, 1);

//     // Write the updated array to the file
//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(user, null, 2), (err) => {
//         if (err) {
//             return res.status(500).json({ status: "error", message: "Failed to update file" });
//         }
//         return res.json({ status: "success", message: "User deleted successfully" });
//     });
// })

// this is delete request using by monogodb

app.delete("/api/user/:id", async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({mes:"user has been deleted"})
})

app.listen(PORT, () => console.log(`server started at http/localhost:${PORT}`))