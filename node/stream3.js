let fs = require("fs");

//创建一个可读流
let readerStream = fs.createReadStream('input.txt');

//创建一个可写流
let writerStream = fs.createWriteStream('output2.txt');

//管道读写操作
//读取input.txt里面的内容，并将内容写入到output2.txt文件中
readerStream.pipe(writerStream);

console.log('程序执行完毕');
