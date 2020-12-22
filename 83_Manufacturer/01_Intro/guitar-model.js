//Import Guitar-Object
import Guitar from './guitar';

export let manufacturerArray  = [];
manufacturerArray.push(new Guitar("Ibanez",["Concert", "E-Guitar", "Western", "E-Bass"]));
manufacturerArray.push(new Guitar("Epiphone",["Concert", "E-Guitar", "Western", "E-Bass", "Acoustic-Bass"]));
manufacturerArray.push(new Guitar("Gibson",["E-Guitar", "Western", "E-Bass"]));
manufacturerArray.push(new Guitar("Martin",["Concert", "Western", "Bluegrass", "Acoustic-Bass", "Ukulele"]));
manufacturerArray.push(new Guitar("Fender",["Concert", "E-Guitar", "Western", "E-Bass"]));
manufacturerArray.push(new Guitar("Jackson",["E-Guitar"]));
manufacturerArray.push(new Guitar("EVH",["E-Guitar", "E-Bass"]));


/* Tests */
// console.log(manufacturerArray.filter((item) => item.manufacturer === "Ibanez"));


/*
let outputBuffer = [];
let search = "E-Bass";
for (let manuf of manufacturerArray){
    outputBuffer.push(manuf.getManufacturerByType(search));
}
//see https://www.w3schools.com/jsref/jsref_replace.asp explanation with regex
console.log(`Manufacturer ${outputBuffer.toString().replace(/,,/g,",")} are selling ${search} guitars.`);
*/
