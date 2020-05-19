var fs = require('fs');

var json = JSON.parse(
	fs.readFileSync('./course.json', 'utf8')
);

console.log(json);
