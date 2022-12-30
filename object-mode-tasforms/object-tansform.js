const {Transform} = require('stream');
const {stringify} =require('ndjson')

const ObjTrans = new Transform({
    objectMode: true,
    transform({firstName, lastName}, encoding, callback){
        callback(null, {name: firstName + " " + lastName});
    }
});

ObjTrans.pipe(stringify()).pipe(process.stdout);

ObjTrans.write({firstName: "eyobed", lastName: "kebede"});
ObjTrans.write({firstName: "pomi", lastName: "cyber"});

//outputs
// {"name":"eyobed kebede"}
// {"name":"pomi cyber"}