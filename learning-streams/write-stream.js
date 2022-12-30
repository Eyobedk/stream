const fs = require('fs');

const file = fs.createWriteStream('./file.txt');

for(let i = 0; i <1000000;i++){
    file.write('THIS IS FROM INTERNET OR SOMEWHERE');
}