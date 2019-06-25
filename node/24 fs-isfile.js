let fs = require("fs");

console.log("文件准备打开");

fs.stat('./input.txt',function(err,stats){
	if(err){
		return console.error(err);
	};
	
	console.log(stats);
	console.log('读取文件信息成功');
	
	//监测文件类型
	console.log("是否为文件(isfile):" + stats.isFile());
	console.log("是否为文件夹目录:" + stats.isDirectory());
})
