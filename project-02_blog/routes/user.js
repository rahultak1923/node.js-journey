const { Router } = require("express")
const User = require('../models/user')

const router = Router();

router.get('/signin', (req, res) => {
    return res.render('signin');
})

router.get("/signup", (req, res) => {
    return res.render('signup')
})

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        // ye function hai jisme email or password aa raha hai jo user ne singin pe daala 
        const token = await User.matchPassword(email, password);
        // console.log("usertoken" , user)
        return res.cookie("token", token).redirect("/")

    } catch (error) {
        return res.render("signin", {
            error: "incorrect email or password"
        })
    }

})

router.get("/logout",(req,res)=>{
    res.clearCookie("token").redirect('/')
})

router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect('/')
})
module.exports = router;