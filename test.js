const http = require("http");
const fs = require("fs");
const path= require("path");
const server = http.createServer(function(req,res){
    res.setHeader("Content-type","text/html");
    console.log(req.url)
    if(req.url=="/"){
        console.log("Req"); 
        fs.read
        //const innerdir = path.resolve(__dirname,"index.html");
          fs.readFile("index.html","utf-8",(e,content)=>{
            //if(e) throw e;
         //   console.log(e);
            console.log(content);
           //res.set("Content-Type","text/html");
           //res.writeHead(200, { 'Content-Type':'text/html'});
            res.write("Hello");
            res.end();
          })
          //res.write("Hello");
        // res.sendFile(innerdir);
        // res.end();
    }
    else if(req.url==="/about")
    {
        res.write("About Me Page");
        res.end();

    }

    if(req.url==="/Contactus")
    {
        res.write("CSE DEPARTMENT CHITKARA UNIVERSITY ");
        res.end();

    }

    //res.end();

})

server.listen(3000, ()=>{

    console.log("Server Started on port 3000....");

})