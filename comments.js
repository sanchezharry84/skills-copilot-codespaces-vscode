// Create web server to handle comments
// 1. Create a web server
// 2. Create a route for /comments
// 3. Create a route for /comment
// 4. Create a route for /comment/:id
// 5. Create a route for /comment/:id/delete

// 1. Create a web server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// 2. Create a route for /comments
app.get('/comments', (req, res) => {
    res.sendFile(path.join(__dirname, 'comments.html'));
});

// 3. Create a route for /comment
app.post('/comment', (req, res) => {
    const comment = req.body.comment;
    res.send(`You have submitted: ${comment}`);
});

// 4. Create a route for /comment/:id
app.get('/comment/:id', (req, res) => {
    const id = req.params.id;
    res.send(`You have requested comment ${id}`);
});

// 5. Create a route for /comment/:id/delete
app.delete('/comment/:id/delete', (req, res) => {
    const id = req.params.id;
    res.send(`You have deleted comment ${id}`);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Test the routes using Postman
// GET http