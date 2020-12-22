import Person from './person';

/*
Aufgabe 1:
a. Erstellen Sie ein neues Objekt 'person1',
mit den Eigenschaften Hans Müller, männlich, geboren am 12.Nov. 1973.
b. Geben Sie den vollen Namen aus mit der Methode .getFullName()
c. Setzen Sie den Namen neu auf "Hans Meili" (hat den Nachnamen seiner Ehefrau angenommen)
d. Geben Sie den vollen Namen aus mit dem Getter
*/

//Lösungen:
//1a.
let person1 = new Person("Hans", "Muster", "männlich", "1973-11-12");
//1b.
console.log(person1.getFullName());
//1c.
person1.fullName = "Hans Meili";
//1d.
console.log(person1.fullName);




/*
Aufgabe X:
later challenge
*/
//console.log(person1.getBio());
//console.log(person1.getBio(['Wandern', 'Fussball spielen']));
