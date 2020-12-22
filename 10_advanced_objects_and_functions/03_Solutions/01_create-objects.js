/*
Aufgabe 2:
Erstellen Sie ein weiteres Objekt 'person2' mit den Eigenschaften
Name Gertrud Müller, weiblich, geboren am 1.3.2002 ?
*/
const genderType = ["weiblich","männlich"];

let person2 = {
    firstName: "Gertrud",
    lastName: "Müller",
    gender: genderType[0],
    birthday: new Date("2002-03-01"),
    getFullName(){
        return `Der Name ist ${this.firstName} ${this.lastName}.`
    },
    getGender(){
        return `${this.lastName} ist ${this.gender}`
    },
    getBirthday(){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return `${this.lastName} ist am ` +
            `${this.birthday.toLocaleDateString('de-CH',options)} geboren.`
    },
    getAge(){
        let ageDifMs = Date.now() - this.birthday;
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return  `${this.lastName} ist ${Math.abs(ageDate.getUTCFullYear() - 1970)} alt.`
    }
}

/*
Aufgabe 3: Geben Sie folgende Angaben des Objektes 'person2' auf der Console aus:
//Ausgabe des vollen Namens auf der Console
//Ausgabe des Geschlechts
//Ausgabe des Geburtstags
//Ausgabe des Alters
 */

//Ausgabe des vollen Namens auf der Console
console.log(person2.getFullName());
//Ausgabe des Geschlechts
console.log(person2.getGender());
//Ausgabe des Geburtstags
console.log(person2.getBirthday());
//Ausgabe des Alters
console.log(person2.getAge());

