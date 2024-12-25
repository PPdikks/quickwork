const express = require('express');
const app = express();
const PORT = 3009;
const add = require('./notes.js');

app.get('/', function (req, res) {
    add.addNum(1, 2); // Calls addNum from notes.js
    setTimeout(() => {
        res.send('Welcome to the page after 5 seconds');
    }, 5000); // Add a 5-second delay
});

app.get('/hey', (req, res) => {
    res.send('Hello bachalog');
});

app.listen(PORT, () => {
    console.log(`The server is listening on PORT ${PORT}`);
});
