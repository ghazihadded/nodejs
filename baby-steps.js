let arr=process.argv.slice(2).map(Number)

 let res= arr.filter(x=>x).reduce((t,r)=>t+r)

console.log(res)