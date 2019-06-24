//写入流
let  fs = require('fs');
let data = '我是菜鸟你看';

//创建一个可以写入的流，写入到文件output.txt中
let writerStream = fs.createWriteStream('./output.txt');

//使用utf8编码写入数据
writerStream.write(data,'UTF8');

//编辑文件末尾
writerStream.end();

//处理流事件 -->data ,end ,and error
writerStream.on('finish',function(){
	console.log("写入完成");
})

writerStream.on('error',function(err){
	console.log(err.stack);
})

console.log('程序执行完毕');
