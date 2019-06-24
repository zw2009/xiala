//Node 应用程序是如何工作的？
//在 Node 应用程序中，执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数。
//接下来让我们来重新看下前面的实例，创建一个 input.txt ,文件内容如下：

let fs = require("fs");

fs.readFile('./input1.txt',function(err,data){
	if(err){
		console.log(err.stack);
		return;
	}
	
	console.log(data.toString());
})

console.log("程序执行完毕")