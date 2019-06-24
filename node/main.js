let fs = require("fs");

//同步执行代码 先读取input文件然后再打印程序结束
//var data = fs.readFileSync("./input.txt");
//console.log(data.toString());
//console.log("程序执行结束");、

//异步执行非阻塞代码 先打印后读取文件

fs.readFile('input.txt',function(err,data){
	if(err) return console.log(err);
	console.log(data.toString());
 })

console.log("程序执行结束")
