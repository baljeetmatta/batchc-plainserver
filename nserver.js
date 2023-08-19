const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url=="/" || req.url=="/index.html")
    {
        // fs.readFile("index.html","utf-8",(err,data)=>{
        //     res.end(data);

        // })
        res.end(readFile("index.html"));


    }
    else if(req.url=="/about.html")
    {
        // fs.readFile("about.html","utf-8",(err,data)=>{
        //     res.end(data);

        // })
        res.end(readFile("about.html"));
    }
    else if(req.url=="/contact.html")
    {
        // fs.readFile("contact.html","utf-8",(err,data)=>{
        //     res.end(data);

        // })
        res.end(readFile("contact.html"));
    }
    else if(req.url=="/style.css")
    {
        // fs.readFile("style.css","utf-8",(err,data)=>{
        //     res.end(data);

        // })
        res.end(readFile("style.css"));
    }
    else if(req.url=="/jscript.js")
    {
        res.end(readFile("jscript.js"));
        // fs.readFile("jscript.js","utf-8",(err,data)=>{
        //     res.end(data);

        // })
    }
    else
    res.end();


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
return fs.readFileSync(filename,"utf-8");
    
}