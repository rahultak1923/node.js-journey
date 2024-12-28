const User = require("../models/user")

async function handleGetAllUsers(req,res) {
    const alldbuser = await User.find({});
    // create a header jab api de deta aayega to ye header show hoga 
    res.setHeader("myname", "rahul tak")
    // console.log(req.headers)
    return res.json(alldbuser);
}

async function getUserById(req,res) {
    const users = await User.findById(req.params.id)
    if (!users) {
        return res.status(404).json({ mes: "user not found" })
    }
    return res.json(users);
}

async function postUserCreate(req,res) {
    const body = req.body;
    // if condision agar data full nhi aaya to status 400 bad request 
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return res.status(400).json({ mes: "all felds are req..." })
    }


    const result = await User.create({
        first_name:body.first_name,
        last_name:body.last_name,
        email:body.email,
        gender:body.gender,
        job_title:body.job_title,
    });
    // console.log("result",result);
    return res.status(201).json({mes: "sucess", id: result._id})
}

async function patchUpdateUser(req,res) {
    await User.findByIdAndUpdate(req.params.id, {last_name: "udiaapa"})
    // edit user with id
    return res.json({ status: "update" })
}

async function deleteUser(req,res) {
    await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({mes:"user has been deleted"})
}

module.exports ={
    handleGetAllUsers,
    getUserById,
    postUserCreate,
    patchUpdateUser,
    deleteUser
}