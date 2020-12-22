/*
Important: start the server with argument -r esm
i.e. node -r esm 82_Manufacturer/01_Intro/server.js
*/

//Imports
import express from 'express';
//import bodyParser from 'body-parser';
import { manufacturerArray } from './guitar-model';


//global definitions
let app     = express();
const port = process.env.PORT || 3001;

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    next();
});



//call url http://localhost:3001/manuf
app.get('/manuf', (req, res) => {
    let result = [];
    manufacturerArray.forEach((element) => result.push(element.manufacturer));
    res.send(JSON.stringify([{name: "Ibanez"}, {name: "Gibson"}]));
});

//call url http://localhost:3001/manuf-list
app.get('/manuf-list', (req, res) => {
    let result = [];
    manufacturerArray.forEach((element) => result.push(element.manufacturer));
    res.send(result.toString());
});

/*
Post example:
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/category/:id', (req, res) => {
    console.log('Got body:', req.body);
    res.sendStatus(200);
});*/

// Starts the server on the given port
app.listen(port, () => {
    console.log(`Application listening on port ${port}!`);
});
