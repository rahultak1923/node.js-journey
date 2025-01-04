const { Router } = require("express")
const multer = require('multer'); // images ko mongodb me save kar ne ke liye 
const path = require('path'); // kon se folder me images save kar ni hai 
const Blog = require("../models/blog");
const User = require("../models/user");
const Comment = require("../models/comment");
const router = Router();

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null, path.resolve(`./public/uploads/`))
    },
    filename: function (req, file,cb){
      const fileName = `${Date.now()}-${file.originalname}`
      cb(null, fileName)  
    }
})

const upload = multer({storage: storage});

// router.get('/add-new',(req,res)=>{
//     return res.render('addBlog',{
//         user: req.user,

//     })
// })
router.get('/add-new', async (req,res)=>{
    try {
        if (!req.user) {
            return res.redirect("/user/signin"); // Redirect if the user is not logged in
        }

        // Fetch the logged-in user's data
        const user = await User.findById(req.user._id);

        res.render("addBlog", {
            use: user,       // Pass the logged-in user's data
            user: req.user,  // Additional user session data (if needed)
        });
    }catch (error) {
        console.error("Error rendering addBlog page:", error);
        res.status(500).send("Internal Server Error");
    }
    
})
// blog card me view par click karne par 
router.get("/:id", async (req,res)=>{
    

        // Fetch the logged-in user's data
        const user = await User.findById(req.user._id);

    const comments = await Comment.find({blogId: req.params.id}).populate('createdBy')
    const blog = await Blog.findById(req.params.id).populate('createdBy'); // populate se jis user nw blog likha hai usko le sakte hai (usko select kar sakte hai)
    // console.log("comment",comments)
    return res.render("blog",{
        use: user,
        user: req.user,
        blog,
        comments,
    });

});

router.delete("/:id", async (req,res)=>{
    await Blog.findByIdAndDelete(req.params.blogId);
    return res.redirect('/')
})

router.post('/comment/:blogId', async (req,res)=>{
   await Comment.create({
        content: req.body.content,
        blogId: req.params.blogId,
        createdBy: req.user._id,
    })
    return res.redirect(`/blog/${req.params.blogId}`)
})

router.post('/', upload.single("coverImage"), async (req,res)=>{
    const {title, body}= req.body 
    const blog = await Blog.create({
    body,
    title,
    createdBy: req.user._id,
    coverImageURL:`/uploads/${req.file.filename}`
})
  return res.redirect(`/blog/${blog._id}`)
})
module.exports = router;