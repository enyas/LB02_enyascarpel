const manufURL = "http://localhost:3000/manufacturer";
const data1El = document.querySelector('#data1');

//data1El.textContent = getManufacturer();
/*getManufacturerCB((manufCB) => {
    console.log(manufCB);
});*/

getManufacturerCB((manufCB) => {
    data1El.textContent = manufCB;
});


/*

const request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        let data1 = JSON.parse(evt.target.responseText);
        if (typeof data1 == "undefined") {
            data1El.textContent = "to be updated";
        } else {
            data1El.textContent = data1.name;
        }
        console.log(`log request ${data1} and ${data1.name}`);
    } else if (evt.target.readyState === 4) {
        console.log(`Error occured with status ${evt.target.status}`);
    }
});

request1.open('GET', manufURL);
request1.send();

*/
