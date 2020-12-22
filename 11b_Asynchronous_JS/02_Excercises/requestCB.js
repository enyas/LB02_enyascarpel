const getManufacturerCB = (callback) => {
    const request1 = new XMLHttpRequest();
    request1.addEventListener('readystatechange', (evt) => {
        if (evt.target.readyState === 4 && evt.target.status === 200) {
            let data1 = JSON.parse(evt.target.responseText);
            console.log(`log request ${data1.name}`);
            if (typeof data1 == "undefined") {
                callback("to be updated");
            } else {
                callback(data1.name);
            }
        } else if (evt.target.readyState === 4) {
            console.log(`Error occured with status ${evt.target.status}`);
        }
    })

    request1.open('GET', manufURL);
    request1.send();
}