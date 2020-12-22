/*
Thema: Schoolserver
Einfacher Server, um Daten (Studenten und Lehrbetrieb) im JSON Format an einen
Client zu senden.
Der Server dient zu Übung und Illustrationszwecken für Callbacks und Promises.
 */

let express = require("express");
let app     = express();
const port = process.env.PORT || 3000;

const server = app.listen(port);
console.log(`Running at Port ${port}`);
server.timeout = 1000 * 60 * 2; // 2 minutes

//https://www.w3schools.com/nodejs/nodejs_filesystem.asp
const fs = require('fs');
//https://nodejs.org/api/path.html
const path = require('path');

//Warning: Korrekt setzen!!
const staticPath = './82_Schoolserver/02_Excercise/data/';


// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Content-Type', 'application/json');
    next();
});

/* Aufgabe 1
a. Erstellen Sie eine JSON-Datei "company.json" im Verzeichnis ./data
b. Erfassen Sie mindestens 3 Lehrbetriebe in der company.json, welche mindestens
    folgende Schlüssel/Werte-Paar (key/value-pairs) enthält:
    id: 3-stellige Fantasie-ID eines Lehrbetriebs. Beginnen Sie bei 101, dann 102, 103, ...
    name: Name des Lehrbetriebs
    contact: Kontakt-Person im Lehrbetrieb
    phone: Telefonnr der Kontakt-Person
    email: Email der Kontakt-Person
    url: Webseite des Lehrbetriebs
    profession: Berufe welche im Lehrbetrieb ausgebildet werden
c.  Wenn die URL http://localhost:3000/companies eingegeben wird, dann
    werden alle Lehrbetriebe aus der Datei ./data/company.json ausgelesen und
    beim Client (Browser) angezeigt.
d.  Wenn die z.B. URL http://localhost:3000/companies/101 eingegeben wird, dann
    wird der Lehrbetrieb mit der id=101 aus der Datei ./data/company.json ausgelesen und
    beim Client (Browser) angezeigt.
 */


app.get('/companies', (req, res) => {
    let fileLoc = path.resolve(staticPath+'company.json');
    let out;
    //fileLoc = path.join(fileLoc, req.url);
    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Fehler und hier die Fehlermeldung: ${error}`);
            res.send(`Ein Fehler ist passiert! Benachrichtigen Sie den Admin.`);
        } else {
            try {
                console.log(text);
                res.send(text);
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});

app.get('/companies', (req, res) => {
    let fileLoc = path.resolve(staticPath+'company.json');
    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Error ${error}`);
        } else {
            try {
                //JSON-Formt auslesen mit der Methode .parse
                const obj = JSON.parse(text);
                let out = "";
                //durch die Daten iterieren
                for (let row in obj.company){
                    for (let key in obj.company[row]){
                        out += `${key}: ${obj.company[row][key]}, `;
                    }
                }
                res.send(JSON.stringify(out, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});

app.get('/companies/:id', (req, res) => {
    let fileLoc = path.resolve(staticPath+'company.json');
    let company_id = req.params.id;

    fs.readFile(fileLoc, 'utf8', (error, text) => {
        if (error) {
            console.error(`Error ${error}`);
        } else {
            try {
                const obj = JSON.parse(text);
                let companyData = {};
                companyData.company_id = "DOES NOT EXIST!";
                for (let row in obj.company){
                    if (obj.company[row].id === parseInt(company_id)){
                        companyData = {
                            "company_id": obj.company[row].id,
                            "Name": obj.company[row].name,
                            "Kontakt": obj.company[row].contact,
                            "Telefon": obj.company[row].phone,
                            "Email": obj.company[row].email,
                            "URL": obj.company[row].url,
                            "Berufe": obj.company[row].profession
                        }
                    }
                }
                res.send(JSON.stringify(out, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });
});
