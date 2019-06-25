//删除目录
let fs = require("fs");

//先创建一个空的目录
console.log("准备删除../node/test1 目录");

fs.rmdir('../node/test1',function(err){
	if(err){
		return console.error(err);
	};
	
	console.log("读取 ../node 目录");
	
	fs.readdir("../node",function(err,files){
		if(err){
			return console.error(err);
		};
		
		files.forEach(function(file){
			console.log(file);
		});
		
	});
});
