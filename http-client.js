const http=require('http')
fs=require('fs')

http.get(process.argv[2],(res)=>{

   res.on('data',(data)=>{
       console.log(data.toString());
   })
})