const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/dadmf2'));

app.listen(process.env.PORT || 8080);

// PathLocationStrategy

appget('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/dadmf2/index.html'));
})

console.log('Console listening!');