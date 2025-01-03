const {Schema, model}= require("mongoose"); // 6. user create kar ne ke liye phle schema banana padta hai 

const commentSchema = new Schema({
    content:{
        type:String,
        required:true,
    },
    blogId:{
        type:Schema.Types.ObjectId,
        ref:"blog",
    },
    createdBy:{ // isme user ki details chahiye islye type object id and refercence me user ko pass kiya hai 
        type:Schema.Types.ObjectId,
        ref:"user",
    }
},{timestamps:true})

const Comment = model("Comment", commentSchema);
module.exports = Comment;