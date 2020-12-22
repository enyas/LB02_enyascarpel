/*
Beispiel Objekt 'person',
mit den Eigenschaften Hans Müller, männlich, geboren am 12.Nov. 1973
 */
let person1 = {
    firstName: "Hans",
    lastName: "Muster",
    gender: "männlich",
    birthday: new Date("1973-11-30"),
    getFullName(){
        return `Der Name ist ${this.firstName} ${this.lastName}.`
    }
}
//Ausgabe des vollen Namens auf der Console
console.log(person1.getFullName());


/*
Frage: Wie lautet das Objekt 'person' mit den Eigenschaften
Anna Muster, weiblich, geboren am 1.3.2002?
*/

let person2 = {
    firstName: "Anna",
    lastName: "Muster",
    gender: "weiblich",
    birthday: new Date("2002-03-01"),
    getFullName(){
        return `Der Name ist ${this.firstName} ${this.lastName}.`
    }
}

//Ausgabe des vollen Namens auf der Console
console.log(person2.getFullName());

/* Frage:
In der realen Welt (z.B. Webshop) gibt es mehr als 2 Personen.
Was muss ich tun wenn ich 100 oder mehr verschiedene
Objekt 'person' (Bsp. Kunden, Benutzer ... ) mit unterschiedlichen Eigenschaften
erstellen möchte?
*/
