//读取目录

let fs = require("fs");

console.log("查看../node目录");

fs.readdir("../node",function(err,files){
	if(err){
		return console.log(err);
	};
	
	files.forEach(function(file){
		console.log(file);
	})
});
