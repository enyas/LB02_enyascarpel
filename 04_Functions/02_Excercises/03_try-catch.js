/*
Aufgabe 1
Gegeben ist das Grundgerüst der Function getTip, welches
das Trinkgeld in Prozent (%) des Betrags (amount) berechnet.

a) Berechnen Sie das Trinkgeld, welches z.B. 25% des Betrags ausmacht.
b) Bei der fehlerhafte Eingabe, wenn der Betrag als String
    (statt als Zahl) eingegeben wird, soll die Meldung
    'Argument must be a number' erscheinen.
 */

const getTip = (amount) => {
    //Ab hier Ihr Programm einfügen

    //Ende Ihres Programms
}

//Aufruf und Ausgabe
try {
    console.log(`Trinkgeld: ${getTip(10)}`);
    console.log(`Trinkgeld: ${getTip("10")}`);
} catch (e) {
    console.log(e.message);
}

