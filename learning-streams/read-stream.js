const fs = require('fs');

const rs = fs.createReadStream('./file.txt');

rs.on('data', (data)=>{
    console.log('read chunck',data.toString());
})

rs.on('end', ()=>{
    console.log('end of data reached')
})