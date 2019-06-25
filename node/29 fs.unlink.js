//删除文件
let fs = require("fs");

console.log("准备删除文件");

fs.unlink('./复制 input.txt',function(err){
	if(err){
		return console.error(err);
	};
	
	console.log("文件删除成功");
})
