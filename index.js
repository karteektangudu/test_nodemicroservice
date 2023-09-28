console.log("Node.js");

var displayData = function(sParam){
    console.log(sParam);
    console.log(typeof(sParam));
}
var x=10;
displayData(x);
var x="Karteek";

var reuse = require("./reuse");
reuse.printData();

var fs=require("fs");
var fileContent = fs.readFileSync("./files/karteek.txt","utf-8");
console.log(fileContent);