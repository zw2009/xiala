//process 是一个全局变量，即 global 对象的属性

process.on("exit",function(code){
	
	//一下代码永远不会执行
	setTimeout(function(){
		console.log("改代码不会执行")
	},0);
	
	console.log("退出代码为：" + code);
})

console.log("程序执行结束");