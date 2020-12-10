const fs=require('fs');
const path =require('path')

const file=process.argv[2]
const ext='.'+process.argv[3]

fs.readdir(file,(err,data)=>{
    if(err)throw err
    data.forEach(file=>{
        if(path.extname(file)===ext){
            console.log(file)
        }
    })
})