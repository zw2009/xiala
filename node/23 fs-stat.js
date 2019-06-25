let fs = require("fs");

fs.stat('D:/xiala/node/22 fs-open.js',function(err,stats){
	console.log(stats.isFile());
})
