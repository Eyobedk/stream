const fs = require('fs');
const file = fs.createReadStream('./file.txt');

file.pipe(process.stdout);