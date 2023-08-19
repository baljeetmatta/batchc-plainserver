const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    let filename=req.url.substr(1);
    res.end(readFile(filename));


});

server.listen(3000,(err)=>{
    if(err)
    console.log("Error in starting server....");
else
console.log("Server started...");

})
function readFile(filename)
{ 
//     fs.readFile(filename,"utf-8",(err,data)=>{
//     return data;

// })
try{
return fs.readFileSync(filename,"utf-8");
}catch(e)
{
    return "";
    
}
    
}