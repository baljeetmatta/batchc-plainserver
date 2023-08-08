const http=require("http");
const server=http.createServer((req,res)=>{
console.log("Request Received");
res.setHeader("Content-type","text/html");

res.write("Welcome to <b>Nodejs</b> ");
res.end();

});
server.listen(3000,(err)=>{
    if(err)
    console.log("Unable to start the server...")
else
console.log("Server started at port 3000");

});
/*
server.on("connection",(socket)=>{
    console.log("Connection Rquest received");

})
*/
