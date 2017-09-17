'use strict'

const fs = require('fs');

const express = require('express')
const bodyParser = require('body-parser')
 
// Create a new instance of express
const app = express()
 
// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

// Route that receives a POST request to /sms
app.post('/echo', function (req, res) {
    const body = req.body['keyTyped'];
    console.log(body);
    fs.writeFile('./KeyboardInput.txt', body);
    
    res.set('Content-Type', 'text/plain');
    res.set('Access-Control-Allow-Origin', '*');
    res.send(`You sent: ${body} to Express`);
})

app.post('/clear', function (req, res) {
    const body = req.body['keyTyped'];
    console.log(body);
    fs.truncate('./KeyboardInput.txt', 0, function(){console.log('done')})
    //fs.writeFile('./KeyboardInput.txt', body);
    
    res.set('Content-Type', 'text/plain');
    res.set('Access-Control-Allow-Origin', '*');
    res.send('File cleared');
})
 
// Tell our app to listen on port 3000
app.listen(8082, function (err) {
  if (err) {
    throw err
  }
 
  console.log('Server started on port 3000')
})
