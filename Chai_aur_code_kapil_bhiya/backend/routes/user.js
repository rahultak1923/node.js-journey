const User = require('../models/user')
const express = require("express");
const router = express.Router();

router.get('/',async(req,res)=>{
    const user = await User.find({})
    const Json = {
user
    }
    return res.json(Json)
})

router.post("/signin", async (req,res)=>{
    const {fullName, email, password}= req.body;
    console.log(req)
    console.log(req.body)
console.log("asdfasdfasdfsdf")

if (!fullName) {
        return res.status(400).json({ error: "Full Name is required" });
    }
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }
    if (!password) {
        return res.status(400).json({ error: "Password is required" });
    }
    console.log(req.body)

   const newUser =  await User.create({
        fullName,
        email,
        password,
        createdBy: req.user_id,
    });
    return res.json({ user: newUser });

})
router.delete("/:id", async(req,res)=>{
const id = req.params.id;
await User.deleteOne({_id:id})


    // const deleteuser = await User.findByIdAndDelete(req.params.id);
    return res.json({message:"user delete"})
})


module.exports = router;