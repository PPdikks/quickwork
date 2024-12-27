const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3009; 
const add = require('./notes.js'); 


app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Welcome to the Node.js app hosted on Vercel!'); 
    }, 5000); 
});


app.get('/hey', (req, res) => {
    setTimeout(() =>{
    res.send('Hello bachalog!');
    },4000);
});


app.listen(PORT, () => {
    console.log(`The server is listening on PORT ${PORT}`);
});
