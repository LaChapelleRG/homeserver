var express = require('express');
var app = express();
var path = require('path');

const port = 3333;
const indexPath = '/index.html';

// viewed at http://localhost:3333
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + indexPath));
});

app.listen(port, ()=>console.log(`listening on Port: ${port}`));
