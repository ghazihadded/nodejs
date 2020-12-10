const fs=require('fs')
var file=process.argv[2]

fs.readFile(file,(err,data)=>{
    
    let content= data.toString().split('\n').length-1
    console.log(content);
})
