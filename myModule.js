const myModule = require('./make-it-modular')

var dir = process.argv [2] 
var filterStr = process.argv [3] 

myModule (dir, filterStr, (err, list)=> { 
  if (err) 
    return console .error ('Il y a eu une erreur:', err) 

  list.forEach ((fichier)=> { 
    console.log (fichier) 
  }) 
})