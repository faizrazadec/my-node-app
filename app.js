const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to my Node.js application!');
});

// Another example route
app.get('/api', (req, res) => {
    res.json({ message: 'This is a sample API endpoint!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
