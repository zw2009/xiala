let express = require('express');
let app = express();

//主页输出‘hello world
app.get('/',function(req,res){
 	console.log('主页get 请求');
 	res.send('Hello GRT');
});

//post请求
app.post('/',function(req,res){
	console.log("主页post请求");
	res.send('')
})
