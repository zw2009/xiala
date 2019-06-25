//相应扩展 index.js，使得路由函数可以被注入到服务器中：server3.js

var server = require("./server3");
var router = require("./router");

server.start(router.route);
