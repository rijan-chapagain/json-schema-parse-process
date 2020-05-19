var fs = require("fs");
var jsonData = fs.readFileSync("./course.json", 'utf8')
var content = JSON.parse(jsonData);
// get value from JSON file
var course = new Object();
	course = content.course;

var literal = createObject(course);

function createObject (structure){
	if(typeof structure == "string") {
		return ('"' + String(structure) + '"');
	}
	
	if(typeof structure == "object") {
        if(typeof structure == "string") 
        {
            return ('"' + String(structure) + '"');
        }
		var	partial = [];

		for (var key in structure) {
			var value = structure[key];
			// recursive function call
			value = createObject(value);
			// reconstruct key:value pair, and store in array
			partial.push('"' + key + '"' + ": " + value);
		}
		// if partial does not possess children insert opening/closing brackets
		// otherwise, comma delimit all values within opening/closing brackets
		value = (partial.length === 0) ? '{}' : '{' + partial.join(' , ') + '}';
		return value;
    }
    else
    {
        console.log("Type doesnot match.");
    }
}
console.log(literal);
