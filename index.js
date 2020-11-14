var express = require('express');
var app = express();

app.use('/', function(req, res) {
    res.send('Hello');
});
app.listen(3002);
console.log('Server running at http://localhost:3002/');
module.exports = app;