const fs=require('fs');
fs.appendFile('mynewfile1.txt','Hello content!' ,()=>{
    console.log("successfully appended");
})