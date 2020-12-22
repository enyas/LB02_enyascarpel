/*
Eine Objekt-Vorlage wird in JavaScript mit class erstellt (nicht zu verwechseln CSS-Klasse)
Beispiel für Person
 */

/* Klasse */
class Guitar {

    //Attribut deklarieren
    manufacturer;
    categoryList = [];

    /* Konstruktor - erstellt das Objekt (sog. Instanz) */
    constructor(manufacturer, category) {
        //Properties - Eigenschaften/Attribute einer Klasse
        this.manufacturer = manufacturer;
        this.categoryList = category;
    }

    /* Methode (ähnlich wie Funktion) - kann Parameter haben */
    getManufacturerByType(category){
        let result = "";
        if (category !== undefined){
            if (this.categoryList.indexOf(category) > -1){
                //Element ist im Array vorhanden
                result = this.manufacturer ;
            }
        }
        return result;
    }


    /* Getter - OHNE Parameter */
    get categories(){
        return this.categoryList;
    }


    /* Setter ohne return */
    set categories(item) {
        this.categoryList.push(item);
    }
}

export default Guitar;
