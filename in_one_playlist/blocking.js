const fs = require ("fs");
//  sync is blocking .. 
console.log('1');
const result = fs.readFileSync("./test.txt","utf-8");
console.log(result);
console.log("2")

// Async non- blocking 

console.log("3");
fs.readFile("./test.txt" ,"utf-8",(err, result)=>{
    console.log(result)
})
console.log("4")