// Initializing Express module. It returns a function
const express = require('express');

// Creating the "Express application" after "express function" return
const app = express();

// Declaring the paths
const pathBookChecking = '/books';

// Adding a listener on port 3000
app.listen(3000, () => console.log('Server running on port 3000!'));

// Declaring the response for the GET request on port 3000 to the specified path ('/' in this case)
app.get(pathBookChecking, function (request, response) {
    response.send('You are on books route!')
});
