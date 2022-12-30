const fs = require('fs');
const {Transform, pipeline} = require('stream');

const transform = new Transform({
    transform(data, encoding, callback){
        callback(null, data.toString().toUpperCase());
    }
})

pipeline(fs.createReadStream('./file.txt'), transform, fs.createWriteStream('out.txt'),(err)=> {if(err) console.log(err); console.log('success')});