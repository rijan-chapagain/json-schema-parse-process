var fs = require('fs');

var json = JSON.parse(
	fs.readFileSync('./book.json', 'utf8')
);

console.log(json);
