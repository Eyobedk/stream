const fs = require('fs');
const file = fs.createReadStream('./file.txt');

file.on('readable', ()=>{
    let data = file.read();
    while(data !== null){
        console.log('chunk of data',data);
        data = file.read();
    }
});