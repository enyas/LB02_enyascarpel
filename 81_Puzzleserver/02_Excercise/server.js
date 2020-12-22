let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

/*
Aufgabe 1
a) Erstellen Sie ein Array mit 10 Einträgen von aktuellen Musikbands, der von diesem
Server aufgerufen werden kann.
b) Die URL muss http://localhost:3000/musicbands lauten
c) Aus der List von 1a soll per Zufall eine Musikband zurückgegeben werden (HTTP Response)
d) Fügen Sie die korrekten Headers ein, damit CORS Requests beantworten werden.
 */

// Musikbands
const musicbandsList = ["The 1975","BROCKHAMPTON",
    "BHZ", "Run - D.M.C.", "Left Boy", "Giant Rooks", "AnnenMayKantreit",
    "Trettmann", "Von Wegen Lisbeth", "Waving The Guns"];

//call url: //http://localhost:3000/musicbands
app.get('/musicbands', (req, res) => {
    const random = Math.floor(Math.random() * musicbandsList.length);
    res.send(JSON.stringify({puzzle: musicbandsList[random]}));
})



