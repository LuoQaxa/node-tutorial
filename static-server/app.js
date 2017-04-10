var http = require('http')
var path = require('path')
var url = require('url')
var fs = require('fs')
var mime = require('./mime').types

// creat http server,listen prot 4000
var PROT = 4000
var server = http.createServer(function(req,res) {
	// get the pathname from request url
	var pathname = url.parse(req.url).pathname
	// set only read file under assets
	var realPath = 'assets' + pathname
	//get extension of path
	var ext = path.extname(realPath)
	//if ext is '' ,we can treat is as unkown
	ext = ext ? ext.slice(1) : 'unkown'
	// read file and send back to browser
	// before read file you should make sure file exist
	fs.exists(realPath,function(exists){
		if (!exists) {
			res.writeHead(404,{
				'Content-Type':'text/plain'
			})
			res.write('sorry file is not found')
			res.end()
		}else {
			fs.readFile(realPath,"binary",function(err,file){
				if (err) {
					res.writeHead(500,{
						'Content-Type':'text/plain'
					})
					res.write(err)
					res.end()
				}else {
					//if ext is unkown, all send back text/plain
					var contentType = mime[ext] || 'text/plain'
					res.writeHead(200,{
						'Content-Type': contentType
					})
					res.write(file,"binary")
					res.end()
				}
			})
		}
	})
})
server.listen(4000)
console.log('server is start listen 4000 port')


