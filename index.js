var express = require('express');
var app = express();

app.use('/', function(req, res) {
    res.send('Hello Raman');
});
app.listen(3001);
console.log('Server running at http://localhost:3001/');
module.exports = app;