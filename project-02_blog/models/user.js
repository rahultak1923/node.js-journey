const {createHmac , randomBytes} = require("crypto"); // 8. password jo has pe convert karne ke liye 
const {Schema, model}= require("mongoose"); // 6. user create kar ne ke liye phle schema banana padta hai 
const { createTokenForUser } = require("../services/authentication");

// schema create kiya 
const userSchema = new Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique: true, // user same email se 2 dar sign na kar paye 
    },
    salt:{
        type:String,
        
    },
    password:{
        type:String,
        required:true,
    },
    profileImageURL:{
        type:String,
        default: "/images/default.svg",
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    }
},{timestamps: true})

//  9. pre matlab user ko save kar ne se phle pre function call karna 
userSchema.pre("save", function (next) {
    const user = this;

    if(!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256",salt)
        .update(user.password)
        .digest("hex")
    
    this.salt = salt;
    this.password = hashedPassword;

    next();
})

// ak function banaya jisme password match karenge 
userSchema.static("matchPassword",async function(email,password){
    const user =await this.findOne({email});
    if(!user ) throw new Error('User not found');
    // user ka password ko db me se lene ke liye 
    const salt = user.salt;
    const hashedPassword = user.password;
    // user login kar ne aaya to uske pass ko has me convert kar ne ke baad check kar ne liye 
    const userProvidedHash = createHmac("sha256",salt) // jo user ne password dala hai usko salt me change kiya or check kiya 
    .update(password)
    .digest("hex")

    if(hashedPassword !== userProvidedHash) throw new Error('password do not match')
    const token = createTokenForUser(user);
    return token;
})

const User = model('user',userSchema); // 7. schema crete hone ke baad model crete hota hai 

module.exports = User;