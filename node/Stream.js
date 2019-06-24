//。Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对http 服务器发起请求的request 对象就是一个 Stream，还有stdout（标准输出）。

let fs = require('fs');

let data = '';

//创建可读流
let readerStream = fs.createReadStream('input.txt');

//设置编码为UTF8
readerStream.setEncoding('UTF8');

//处理流事件 -->data, end ,and error
readerStream.on('data',function(chunk){
	data += chunk;
})

readerStream.on('end',function(){
	console.log(data)
})

readerStream.on('error',function(err){
	console.log(err.stack);
})

console.log('程序执行完毕');
