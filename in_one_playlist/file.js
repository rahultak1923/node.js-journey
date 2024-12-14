const fs = require("fs");

//  this is a sync  "create a file "
fs.writeFileSync("./test.txt" , "hello rahul tak ")

// this is async  "create a file " ye abi processing me hia tab tek aage ka kaam kar ke aao 
fs.writeFile("./test.txt","hello rahul bhai ", (err)=>{})

//  read file sync 
const result = fs.readFileSync("./test.txt" , "utf-8")
console.log(result)

//  read file async
fs.readFile("./test.txt" ,"utf-8",(err,result)=>{
    if(err){
        console.log("err",err)
    }
    else{
        console.log(result)
    }
})

//  file me kuch add karna --- lakin asunc file me add karne se ye funciton kaam nhi karega line no 7 
fs.appendFileSync("./test.txt" , `hello rahul\n`);