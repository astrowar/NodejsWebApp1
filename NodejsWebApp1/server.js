var http = require('http');
var fs = require('fs');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    fs.readFile('users.json', 'utf-8', function (err, data) {
        if (err)
            throw err;
        console.log(data);
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf-8'
        });
        var users = JSON.parse(JSON.stringify(data));
        var s = 'Hello World NODE...' + users.toString();
        res.end(s);
    });
}).listen(port);
//# sourceMappingURL=server.js.map