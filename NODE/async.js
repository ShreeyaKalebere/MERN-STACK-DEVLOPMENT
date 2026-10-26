const fs=require('fs');
console.log("Start");

fs.readFile('file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);   
        return;
    }
console.log(data);
});
console.log("End");