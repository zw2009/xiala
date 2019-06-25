//创建目录
let fs = require("fs");

//node 目录必须存在
console.log('创建目录 /node/test/');

fs.mkdir("../node/test3",function(err){
	if(err){
		return console.error(err);
	};
	
	console.log("目录创建成功");
});
