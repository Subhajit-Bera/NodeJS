
//File-based module
// Export it in app.js:

// const a={
//     average:(a,b)=>{
//         console.log((a+b)/2);
//     },
//     percent: (a,b)=>{
//         console.log((a/b) *100);
//     }
// };
// module.exports=a;



// Build-in module 


//FS
// const fs=require("fs");

//read a file using fs:
//Asynchronous method
// fs.readFile("./sample.txt","utf-8",(err,data)=>{
//     if(err){
//         return err;
//     }
//     console.log(data);
// });


//Synchronous method:
// const content=fs.readFileSync("./sample.txt","utf-8");
// console.log(content);
    
// console.log("I am first");


//HTTP
//Create Server using http:

const http=require("http");
const fs=require("fs"); 

const PORT =2000;
const hostname="localhost"
const home=fs.readFileSync("./index.html","utf-8"); //read a HTML FILE


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        return res.end(home); //send html file as response
    }
    if(req.url==='/about'){
        return res.end("<h1>This is ABOUT PAGE</h1>");
    }
    if(req.url==='/contact'){
        return res.end("<h1>This is CONTACT PAGE</h1>");
    }else{
        return res.end("<h1>404 Page not found</h1>");
    }

});

// server.listen(portnumber,hostname,callback function )

server.listen(PORT,hostname,()=>{
    console.log(`Server is running on http://${hostname}:${PORT}`)
});



