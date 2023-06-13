const http =require("http");
const fs =  require('fs');
const server =http.createServer((request,response)=>{
    const filePath ='./q9.html';
    fs.readFile(filePath,'utf8',(error,html)=>{
        if(error){
        response.writeHead(500,{'content-type':'text/plain'});
        response.end('Internal Server Error');
        return;
        }
        response.writeHead(200,{'content-type':'text/html'});
        response.end(html);
    });
});
server.listen(3000,()=>{
    console.log("working on port 3000")
})