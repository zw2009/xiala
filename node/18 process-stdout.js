//输出到终端
process.stdout.write("hello world" + "\n");

//通过参数读取
process.argv.forEach(function(val,index,array){
	console.log(index + ':' + val);
});

//h获取执行路径
console.log(process.execPath);

//平台信息
console.log(process.platform);