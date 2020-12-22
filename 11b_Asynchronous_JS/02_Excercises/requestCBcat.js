const getCategoryCB = (callback) => {
    const request1 = new XMLHttpRequest();
    request1.addEventListener('readystatechange', (evt) => {
        if (evt.target.readyState === 4 && evt.target.status === 200) {
            let data2 = JSON.parse(evt.target.responseText);
            console.log(`log request ${data2.name}`);
            if (typeof data2 == "undefined") {
                callback("to be updated");
            } else {
                callback(data2.name);
            }
        } else if (evt.target.readyState === 4) {
            console.log(`Error occured with status ${evt.target.status}`);
        }
    })

    request1.open('GET', categoryURL);
    request1.send();
}