const express = require('express'); // Import Express
const app = express(); // Initialize the app
const PORT = process.env.PORT || 3009; // Dynamic port for Vercel or local testing
const add = require('./notes.js'); // Import notes.js file

// Root route ("/") - Displays a welcome message
app.get('/', (req, res) => {
    setTimeout(() => {
        res.send('Welcome to the Node.js app hosted on Vercel!'); // Wait 5 seconds to display
    }, 5000); // 5000 ms = 5 seconds
});

// A second route ("/hey") - Just an example route
app.get('/hey', (req, res) => {
    res.send('Hello bachalog!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`The server is listening on PORT ${PORT}`);
});
