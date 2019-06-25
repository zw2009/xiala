//Process 提供了很多有用的方法，便于我们更好的控制系统的交互：

//输出当前目录
console.log('当前目录' + process.cwd());

//输出当前版本
console.log("当前版本:"+ process.version);

//输出内存使用情况
console.log(process.memoryUsage());