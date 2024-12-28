const express = require("express");
const { handleGetAllUsers, getUserById, postUserCreate, patchUpdateUser, deleteUser } = require("../controllers/user");


// Router alag file use karne ke liye "Router.get" use karenge 
const router = express.Router();

// user pe get request all user data show kar ne ke liye 
router.get('/', handleGetAllUsers)


// router.get('/user', async (req, res) => {
//     const alldbuser = await User.find({});
//     const html = `
//     <ul>
//     ${alldbuser.map((user) => `<li>${user.first_name}<br> ${user.email}</li>`).join("")}
//     </ul>
//     `
//     res.send(html);
// })

// Dyaminc path parameters 
router.get('/:id', getUserById)

router.post('/', postUserCreate)

router.patch("/:id", patchUpdateUser)
 
router.delete("/:id", deleteUser)

module.exports = router;