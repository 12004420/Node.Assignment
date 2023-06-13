const http =require("http");

const server =http.createServer((req,res)=>{
    res.setHeader(200,{'content-type':'text/html'});
    res.end("Hello World");
})
server.listen(3000,()=>{
    console.log("working on port 3000")
})