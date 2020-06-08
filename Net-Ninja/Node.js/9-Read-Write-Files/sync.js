const fs = require('fs');

// Sync Method is Blocking Code
const readMe = fs.readFileSync('./ReadMe.txt','utf8'); // Encode Transformar Binary data to Strings
console.log('First  :',readMe);

fs.writeFileSync('WriteMe.txt','I Just Write this File!')
const WriteMe = fs.readFileSync('./WriteMe.txt','utf8');
console.log('Second :',WriteMe);