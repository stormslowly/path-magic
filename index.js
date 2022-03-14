const path = require('path');
const os = require('os');


console.log(process.platform);
console.log('------> join', path.join(__dirname, 'test/test2/test3'));
console.log('------> normalize', path.normalize('test/test2/test3'));


