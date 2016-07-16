var fs = require('fs');

var buff = fs.readFileSync(process.argv[2])
var str = buff.toString().split('\n');
var count = str.length -1;
console.log(count)