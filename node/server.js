let http = require('http');

http.createServer(function(request,response){
	
	//发送HTTP头部
	//HTTP状态值200：ok
	//内容类型：text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});
	
	//发送响应数据 'Hello World'
	response.end('hello World\n');
	
	
	
}).listen(8080);

//终端打印
console.log('Server running at http://127.0.0.1:8080/')
