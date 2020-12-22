/* Modul - externer Programm-Code  nach ES5-Standard
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
*/
import Person from './person';
/*
Lösung:
Eine Vorlage (template, blueprint) um Objekte zu erzeugen.
 */

let person1 = new Person("Hans", "Muster", "männlich", "1973-11-30");
//Ausgabe
//console.log(person1.getFullName());
//Wichtig Aufruf mit der Option -r esm


let person2 = new Person("Anna", "Muster", "weiblich", "2002-03-01");
//Ausgabe
/*
console.log(person2.getFullName());
console.log(person2.fullName);
//Frau Muster hat geheiratet und nimmt den Name des Ehemanns an
person2.fullName = "Anna Meier";
console.log(person2.fullName);
*/

//Array (Liste) aus Personen ?
let personArray  = [];
personArray.push(new Person("Hans", "Muster", "männlich", "1973-11-30"));
personArray.push(new Person("Anna", "Muster", "weiblich", "2002-03-01"));
personArray.push(new Person("Greta", "Thunberg", "weiblich", "2003-03-01"));

//console.log(personArray);
//Ausblick
console.log(personArray.filter((person) => person.geschlecht === "weiblich"));


