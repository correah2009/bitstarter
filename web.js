var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var file = fs.readFileSync(index.html);
    var num= buffer.write(fs.readFileSync(index.html, encoding), "utf-8");
    var response.send(buffer.toString("utf-8",0,num));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
