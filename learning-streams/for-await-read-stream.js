const fs = require('fs');
const file = fs.createReadStream('./file.txt');

async function run(){
    for await (chunk of file){
        console.log('chunks of data', chunk);
    }
}

run();