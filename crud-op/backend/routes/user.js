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

router.get('/:id',async(req,res)=>{
    const userid = req.params.id;
    const user = await User.findById(userid);
    return res.json({user})
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

router.delete("/delete/:id", async (req, res) => {
    try {
      const userid = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userid);
      
      return res.json({ message: "User delete", user: deletedUser });
    } catch (error) {
      return res.status(500).json({ error: "failed to delete user" });
    }
  })


  router.put("/update/:id", async (req, res) => {
    try {
        const userid = req.params.id;
        const { fullName, email, password } = req.body;
        
        const updatedUser = await User.findByIdAndUpdate(userid, {
            fullName,
            email,
            password
        }, { new: true }); // Returns the updated document
        
        return res.json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: "Failed to update user" });
    }
});

module.exports = router;