const fs = require('fs');
const { Transform } = require('stream');

const file = fs.createReadStream('./file.txt');

const newfile = fs.createWriteStream('out.txt');

const transform = new Transform({
    transform(chunck, encoding, callback) {
        callback(null, logger(chunck));
    }
});
function logger(chuncks) {
    console.log(chuncks.toString().toUpperCase())
    return chuncks.toString().toUpperCase();
}
file.pipe(transform).pipe(newfile);