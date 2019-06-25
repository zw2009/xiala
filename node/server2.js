//来给 onRequest() 函数加上一些逻辑，用来找出浏览器请求的 URL 路径：
var http = require('http');
var url = require('url');

function start(){
	function onRequest(request,url){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for" + pathname + "received");
		response.writeHead(200,{'Content-Type':"text/plain"});
		response.write("hello world");
		response.end();
	}
	
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}

exports.start = start;
