const obj = {alg:'sha256',type:'123'};

const buf = Buffer.from(JSON.stringify(obj));
console.log(buf.toString('base64')); 

const base64 = buf.toString('base64');
const buf = Buffer.from(base64,'base64');
console.log(buf1.toString('utf-8'));
const fs = require('fs');
fs.readFile('./readme.md',(err,buf3) => {
    console.log(buf3);
})