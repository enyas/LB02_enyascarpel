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

    /* Setter ohne return */
    set fullName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
    /* Getter  - OHNE Parameter */
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    /* Methode - kann Parameter haben */
    getFullName(){
        return `Mein Name ist ${this.firstName} ${this.lastName}.`;
    }

    /* Methode - Advanced challenge for later */
    getBio(likes = []) {
        let bio = `Mein Name ist ${this.firstName} ${this.firstName}.`;
        bio = bio + ` Ich bin ${this.geschlecht}`;
        bio += ` und am ${this.birthday} geboren.`;

        if (likes.length > 0) {
            bio += ` In meiner Freizeit tue ich`;
            likes.forEach((like) => {
                bio += ` ${like}`;
            });
        }
        return bio;
    }
}

export default Person;
