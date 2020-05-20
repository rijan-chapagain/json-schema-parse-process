var fs = require("fs");
var xml2js = require('xml2js');

//creating parser obj to parse xml to js
var parser = new xml2js.Parser();

fs.readFile('./course.xml', function(err, data){

    parser.parseString(data, function(err, result){
        console.dir(result);
    }); 
});
