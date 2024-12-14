const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    // favicon ke url ko show na karne ke liye 
    if(req.url === "/favicon.ico") return res.end()
    // user ki date lene ke liye 
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received \n`;
    // log file create kar ne ke liye and user ki date add kar ne ke liye 
    fs.appendFile("./log.txt" ,log ,(err,data)=>{
     switch(req.url){
        case '/' : res.end("this is a home pages")
        break
        case '/about': res.end("this is a about pages ")
        break
     }
    })
    console.log("new req rec");
    // console.log(req.headers)
    // web pages pe data show kar ne ke liye 

    // res.end("hello form server");
});

server.listen(8000, ()=> console.log("server started "))