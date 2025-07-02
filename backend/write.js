import fs from 'fs'

fs.writeFile("write.txt","hello harshal", function(err){
    if(err) console.error(err);
    else console.log("All good");
} )