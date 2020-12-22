//function getManufacturer(){
const getManufacturer = () =>{
    const request1 = new XMLHttpRequest();
    let result = "";
    request1.addEventListener('readystatechange', (evt) => {
        if (evt.target.readyState === 4 && evt.target.status === 200) {
            let data1 = JSON.parse(evt.target.responseText);
            console.log(`log request ${data1.name}`);
            if (typeof data1 == "undefined") {
                //data1El.textContent = "to be updated";
                //result = "to be updated";
                return "to be updated";
            } else {
                //data1El.textContent = data1.name;
                return data1.name;
            }
        } else if (evt.target.readyState === 4) {
            console.log(`Error occured with status ${evt.target.status}`);
        }
        return result;
    });

    request1.open('GET', manufURL);
    request1.send();
    return result;
}


