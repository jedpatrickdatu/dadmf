console.log('Kremshallllllllllllllllllllllllllllll!');
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/dadmf2'));

// PathLocationStrategy

appget('/*all', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/dadmf2/index.html'));
})

app.listen(process.env.PORT || 8080);

console.log('Console listening!');