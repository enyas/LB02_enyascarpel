/*
Eine Vorlage wird mit class erstellt (nicht zu verwechseln CSS-Klasse)
Beispiel für Person
 */

/* Klasse */
class Person {
    /* Konstruktor */
    constructor(firstName, lastName, geschlecht, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.geschlecht = geschlecht;
        this.birthday = birthday;
    }

    /* Getter */


    /* Setter */



    /* Methode - kann Parameter haben */
    getFullName(){
        return `Mein Name ist ${this.firstName} ${this.lastName}.`;
    }

}

export default Person;
