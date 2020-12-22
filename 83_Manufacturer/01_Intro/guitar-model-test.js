/*
Important: start the server with argument -r esm
i.e. node -r esm 82_Manufacturer\01_Intro\guitar-model-test.js (Windows)
i.e. node -r esm 82_Manufacturer/01_Intro/guitar-model-test.js (AppleOS)
*/

//Imports
import { manufacturerArray } from './guitar-model';

/* Test 1 */
console.log(manufacturerArray.filter((item) => item.manufacturer === "Ibanez"));

/* Test 2 */
let outputBuffer = [];
let search = "E-Bass";
for (let manuf of manufacturerArray){
    outputBuffer.push(manuf.getManufacturerByType(search));
}
//see https://www.w3schools.com/jsref/jsref_replace.asp explanation with regex
console.log(`Manufacturer ${outputBuffer.toString().replace(/,,/g,",")} are selling ${search} guitars.`);
