/*
Aufgabe 1
a) Erstellen Sie eine Funktion als 'function expression',
welche Fahrenheit in Celsius umwandelt.

Die Umwandlungsformel lautet: celsius = (fahrenheit - 32) * 5 : 9

b) Testen Sie Ihre Funktion mind. zwei Mal mit verschiedenen Fahrenheit-Werten.

 */

//Ab hier Ihr Programm einfügen

//Ende Ihres Programms

//Aufruf und Ausgabe
let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);
console.log(tempOne)
console.log(tempTwo)


/*
Aufgabe 2
a) Erstellen Sie eine Funktion als 'function declaration',
welche zwei Zahlen subtrahiert.

b) Testen Sie Ihre Funktion mind. zwei Mal mit verschiedenen Fahrenheit-Werten.
 */

//Ab hier Ihr Programm einfügen

//Ende Ihres Programms

//Aufruf von sub
let paramA = 20;
let paramB = 10;
//Ausgabe des Resultats
console.log(`${paramA} - ${paramB} = ${sub(paramA,paramB)}`);


/* Freiwillig */

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
    //Ab hier Ihr Programm einfügen

    //Ende Ihres Programms
}

let result = linearNotenSkala(9, 21);
console.log(result);
