/*
Aufgabe 1
a) Erstellen Sie eine Funktion als 'function expression',
welche Fahrenheit in Celsius umwandelt.

Die Umwandlungsformel lautet: celsius = (fahrenheit - 32) * 5 : 9

b) Testen Sie Ihre Funktion mind. zwei Mal mit verschiedenen Fahrenheit-Werten.

 */
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)


/*
Aufgabe 2
a) Erstellen Sie eine Funktion als 'function declaration',
welche zwei Zahlen subtrahiert.

b) Testen Sie Ihre Funktion mind. zwei Mal mit verschiedenen Fahrenheit-Werten.
 */


function sub(a,b) {
    return a - b;
}

//Aufruf von add
let paramA = 20;
let paramB = 10;
//Ausgabe des Resultats
console.log(`${paramA} - ${paramB} = ${sub(paramA,paramB)}`);


/* Extra */

/*
Aufgabe 3: Lineare Notenberechnung
a) Programmieren Sie eine Funktion, welche die Note nach der linearen Skala
berechnet. Die Formel ist
    Note = (erreichtePunkte / maxPunkte) * 5 + 1
b) Zusätzlich soll ein Text ausgegeben werden. Wenn die Note >= 4.0 ist, dann
ist die Noten 'genügend', ansonsten 'ungenügend'. Den genauen Text für die Ausgabe
dürfen Sie selber ausschmücken/verfassen.

 */


function linearNotenSkala (erreichtePunkte, maxPunkte) {
    let note = (erreichtePunkte / maxPunkte) * 5 + 1;
    let msg;

    if (note >= 4.0) {
        msg = 'genügende';
    } else {
        msg = 'ungenügende'
    }

    return `Mit ${erreichtePunkte} Punkte haben Sie eine ${msg}`+
                `Note (${note.toFixed(2)}) erzielt!`;
}

let result = linearNotenSkala(9, 21);
console.log(result);



/* Extra-Aufgabe */

function linearNotenSkalaLong (erreichtePunkte, maxPunkte) {
    let note = (erreichtePunkte / maxPunkte) * 5 + 1;
    //let sufficient = 3*erreichtePunkte/5;
    let msg;

    if (note === 6.0) {
        msg = 'hervorragende';
    } else if (note >= 5.5) {
        msg = 'sehr gute';
    } else if (note >= 5) {
        msg = 'gute';
    } else if (note >= 4.5) {
        msg = 'mehr als genügende';
    } else if (note >= 4.0) {
        msg = 'genügende';
    } else {
        msg = 'ungenügende'
    }

    return `Mit ${erreichtePunkte} Punkte haben Sie eine ${msg}`+
                `Note (${note.toFixed(2)}) erzielt!`;
}

let result = linearNotenSkalaLong(9, 21);
console.log(result);
