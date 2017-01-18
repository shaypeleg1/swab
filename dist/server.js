var express = require('express');
var path = require('path');


var port = process.env.PORT || 5000;

app = express();
app.use('/', express.static(__dirname));

app.use('/*', express.static(__dirname));

app.listen(port, function () {
  console.log('server started ' + port);
});