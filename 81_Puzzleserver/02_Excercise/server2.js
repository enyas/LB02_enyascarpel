/*
Thema: Einfacher Server, welcher
a. CORS Anfragen (CORS Requests) erlaubt
b. Bei einer Anfrage durch einen Client per Zufallsgenerator einen Film zurück gibt.
 */

let express = require("express");
let app     = express();
let path    = require("path");
//let fs = require("fs");
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});

//Source https://www.thegamegal.com/printables/
const moviePuzzleList = ["Shrek","Alice in Wonderland",
    "Finding Nemo", "My Fair Lady", "Cinderella", "Cars", "Spiderman",
    "Peter Pan", "Toy Story", "Inception Robin Hood"];

//call url http://localhost:3000/puzzle
app.get('/puzzle', (req, res) => {
    const random = Math.floor(Math.random() * moviePuzzleList.length);
    res.send(JSON.stringify({name: moviePuzzleList[random]}));
});

const manufacturerList = ["Ibanez", "Gibson", "Fender", "PRS",
    "Schecter", "Jackson", "EVH", "Epiphone", "Martin"];

//call url http://localhost:3000/manufacturer
app.get('/manufacturer', (req, res) => {
    const random = Math.floor(Math.random() * manufacturerList.length);
    res.send(JSON.stringify({name: manufacturerList[random]}));
});



/* Aufgabe:
1. Fügen Sie einen Array categoryList mit Gitarren-Kategorien,
z.B. "Concert", "E-Guitar", "Western", "E-Bass", "Ukulele", "Bluegrass", "Acoustic-Bass"
2. Fügen Sie einen neuen REST-Pfad, welche auf die über die
URL http://localhost:3000/category per Zufallsgenerator eine
Kategorie zurückgibt.
 */

//Gitarren Kategorien
const categoryList = ["Concert", "E-Guitar", "Western", "E-Bass", "Ukulele", "Bluegrass", "Acoustic-Bass"];

//call url http://localhost:3000/category
app.get('/category', (req, res) => {
    const random = Math.floor(Math.random() * categoryList.length);
    res.send(JSON.stringify({name: categoryList[random]}));
});


//Sportarten Kategorien
const sportList = ["Basketball", "Fussball", "Volleyball", "Geräteturnen", "Eishockey", "Golf", "Tennis"];

//call url http://localhost:3000/sport
app.get('/sport', (req, res) => {
    const random = Math.floor(Math.random() * sportList.length);
    res.send(JSON.stringify({name: sportList[random]}));
});
