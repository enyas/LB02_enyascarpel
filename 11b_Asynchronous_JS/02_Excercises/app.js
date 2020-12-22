/* Aufgabe 3
a. Schreiben Sie den request1 als Funktion getManufacturerCB
mit Callback als Argumente um (ähnlich wie in der Demo).

Wichtig ist, dass die neue Funktion
Daten zurückliefert. Wenn data1El.textContent = data1.name oder ähnliches
in der neuen Funktion haben, dann ist das Ziel NICHT erreicht.
 */

const manufURL = "http://localhost:3000/manufacturer";
const data1El = document.querySelector('#data1');

//3:

getManufacturerCB((manufCB) => {
    data1El.textContent = manufCB;
});


/* Aufgabe 4
a. Fügen Sie eine neue Funktion 'getCategoryCB' mit Callback als Argumente
(ähnlich wie in der Demo), welche XMLHttpRequest an ""
absetzt.
 */

const categoryURL = "http://localhost:3000/category";
const data2El = document.querySelector('#data2');

// 4:

getCategoryCB((catCB) => {
    data2El.textContent = catCB;
});