/*
Thema: Funktionen
Funktionen (praktisch in allen Programmiersprachen) vorhanden,
erlauben Programmcode mehrmals auszuführen gestalten die gesamte
Applikation wartbarer (leserlich, kosteneffizient, erweiterbar).

Beispiel 1 - Funktion ohne Parameter
 */

//entweder als 'function expression' -> Funktionsname wird weggelassen
let greetUser = function () {
    console.log('Welcome user!')
}

//Aufruf der Funktion mit gleichzeitger Ausgabe auf der Console
greetUser();
greetUser();


//oder als 'function declaration' -> Funktionsname wird hinzugefügt.
function greetUser2() {
    console.log('Welcome user too!')
}

//Aufruf der Funktion mit gleichzeitger Ausgabe auf der Console
greetUser2();

/*
Beispiel 2 - Funktion MIT einem Parameter
 */
function square (num) {
    let result = num * num;
    return result;
}


//Aufruf der Funktion
let result1 = square(3);
//Ausgabe des Resultats
console.log(`3 hoch 2 gibt: ${result1}`);


//Aufruf der Funktion
let param1 = 10;
let result2 = square(param1);
//Ausgabe des Resultats
console.log(`${param1} hoch 2 gibt: ${result2}`);


/*
Beispiel 3 - Funktion MIT mehr als einem Parameter
 */

let add = function (a,b) {
    return a + b;
}

function div(a,b) {
    return a / b;
}

//Aufruf von add
let paramA = 20;
let paramB = 10;
console.log(`${paramA} + ${paramB} = ${add(paramA,paramB)}`);

//Aufruf div mit gültigen Parametern
paramA = 20;
paramB = 10;
console.log(`${paramA} / ${paramB} = ${div(paramA,paramB)}`);

//Aufruf div mit UNgültigen Parametern
paramA = 20;
paramB = 0;
console.log(`${paramA} / ${paramB} = ${div(paramA,paramB)}`);


/*
Beispiel 4 - Funktion mit Objekten als Parameter
 */


//Objekt 1
let book1 = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

//Objekt 2
let book2 = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

//Funktion liefert als Resultat wieder ein Objekt zurück
let getSummary = function (book) {
    return {
        summary: `Das Buch \"${book.title}\" ist vom Autor ${book.author}`,
        pageCount: `Das Buch \"${book.title}\" hat ${book.pageCount} Seiten.`
    }
}

//Aufruf und Ausgabe
let obj1 = getSummary(book1);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

obj1 = getSummary(book2);
console.log(`${obj1.summary}. ${obj1.pageCount}`);

