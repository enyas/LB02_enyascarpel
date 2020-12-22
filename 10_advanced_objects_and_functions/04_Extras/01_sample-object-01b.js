var moment = require('moment');

/*
Beispiel Objekt 'person',
mit den Eigenschaften Hans Müller, männlich, geboren am 12.Nov. 1973
*/

const genderType = ["weiblich","männlich"];


//Definition
let person = {
    firstName: "Hans",
    lastName: "Muster",
    gender: genderType[1],
    birthday: moment("12-11-1973", ["DD-MM-YYYY"]),
    getFullName(){
        return `Der Name ist ${this.firstName} ${this.lastName}.`
    },
    getGender(){
        return `${this.lastName} ist ${this.gender}`
    },
    getBirthday(){
        //return `${this.lastName} ist am ${this.birthday.toISOString()} geboren.`
        //return `${this.lastName} ist am ${this.birthday.format("dddd, MMM YYYY")} geboren.`
        //https://momentjs.com/docs/#/i18n/
        return `${this.lastName} ist am ${this.birthday.locale('de-CH').format('dddd DD. MMM YYYY')} geboren.`
    },
    getAge(){
        //https://momentjs.com/docs/#/displaying/difference/
        return `${this.lastName} ist ${moment().diff(this.birthday,'years')} alt.`
    }
}
//Ausgabe des vollen Namens auf der Console
console.log(person.getFullName());
//Ausgabe des Geschlechts
console.log(person.getGender());
//Ausgabe des Geburtstags
console.log(person.getBirthday());
//Ausgabe des Alters mit der Bibliothek moment.js
console.log(person.getAge());
