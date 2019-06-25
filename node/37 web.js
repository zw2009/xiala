//最基本的 HTTP 服务器架构(使用 8080 端口)

let http = require('http');
let fs = require('fs');
let url = require('url');

//创建服务器
http.createServer(function(request,response){
	//解析请求，包括文件名
	let pathname = url.parse(request.url).pathname;
	
	//输出请求的文件名
	console.log("Request for" + pathname + 'received');
	
	//从文件系统中读取请求的文件内容
	fs.readFile(pathname.substr(1),function(err,data){
		if(err){
			console.log(err);
			
		}
	})
});
