let fs = require("fs");

console.log("准备写入文件");
fs.writeFile('./input.txt', '我是通 过fs.writeFile 写入文件的内容',function(err){
	if(err){
		return console.error(err);
	};
	
	console.log('写入数据成功');
	console.log("__________分隔符——————————————————");
	console.log("读取写入的数据");
	
	fs.readFile('./input.txt',function(err,data){
		if(err){
			return console.error(err);
		};
		
		console.log('异步读取文件数据:'+ data.toString());
	})
})
