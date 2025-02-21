const { Router } = require("express");
const User = require('../models/user')

const router = Router();

router.get('/',async(req,res)=>{
    const user = await User.find({})
    const Json = {
user
    }
    return res.json(Json)
})

router.post("/signin", async (req,res)=>{
    const {fullName, email, password}= req.body;
    console.log(req.body)
   const newUser =  await User.create({
        fullName,
        email,
        password,
        createdBy: req.user_id,
    });
    return res.json({ user: newUser });

})

module.exports = router;