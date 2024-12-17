const express = require ("express")
const fs = require ("fs")
const user = require ("./MOCK_DATA.json");
const { json } = require("stream/consumers");

const app = express();
const PORT = 8000;

// middleware plugin
app.use(express.urlencoded({extended:false}))

// Routes
app.get('/api/user',(req,res)=>{
    return res.json(user);
})

app.get('/user', (req,res)=>{
    const html = `
    <ul>
    ${user.map((user)=>`<li>${user.first_name} </li>`).join("")}
    </ul>
    `
    res.send(html);
})

// Dyaminc path parameters 
app.get('/api/user/:id',(req,res)=>{
    const id = Number(req.params.id);
    // json file me se user ki id find kar ne ke liye 
    const users = user.find((user)=> user.id === id);
    return res.json(users);
})

app.post('/api/user',(req,res)=>{
    // create new user 
    // josn ko pata nhi hota hai ki kis tarh ke data aane wala hai is liye puligin ka use karte hai
    const body = req.body;
    user.push({...body , id: user.length + 1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(user),(err,data)=>{
        return res.json({status: "sucess",id:user.length})

    })
})

app.patch("/api/user/:id",(req,res)=>{
    // edit user with id
    return res.json({status: "pending"})
})

app.delete("/api/user/:id",(req,res)=>{
    const id = Number(req.params.id);

    // Check if the user exists
    const userIndex = user.findIndex((u) => u.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ status: "error", message: "User not found" });
    }

    // Remove the user from the array
    user.splice(userIndex, 1);

    // Write the updated array to the file
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(user, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to update file" });
        }
        return res.json({ status: "success", message: "User deleted successfully" });
    });
})

app.listen(PORT,()=> console.log(`server started at http/localhost:${PORT}`))