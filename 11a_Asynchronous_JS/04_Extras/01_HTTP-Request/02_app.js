/*
Thema: Asynchrone Verarbeitung im Web und CORS
 */
/*
Beispiel: Browser-Support überprüfen
*/

function browserSupportCORS(){
    let msg = "Your browser supports CORS!";
    if ("withCredentials" in new XMLHttpRequest()){
        return msg;
    }
    else if (typeof XDomainRequest == "object"){
        return msg;
    }
    else { return "Your browser DOES NOT supports CORS!";}
}

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 4) {
        console.log(browserSupportCORS());
    }
});

//URL of the puzzle server
request.open('GET', 'http://localhost:3000/puzzle');
request.send();
