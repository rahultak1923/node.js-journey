const {Schema, model}= require("mongoose"); // 6. user create kar ne ke liye phle schema banana padta hai 


const blogSchema = new Schema({
    title:{
        type:String,
        required: true,
    },
    body:{
        type: String,
        required:true,
    },
    coverImageURL :{
        type:String,
        required:false,
    },
    createdBy:{
        type:Schema.Types.ObjectId,
        ref:"user",
    }
},{timestamps:true})

// backend me schema banane ke baad uska model banana jaruri hota hai 

const Blog = model('blog', blogSchema);

module.exports = Blog;