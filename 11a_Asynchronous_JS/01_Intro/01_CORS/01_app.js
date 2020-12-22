/*
Thema: Asynchrone Verarbeitung im Web und CORS

Beispiel 1: Anstossen des TodoList-Service.

Origin Server: http://localhost:63342
CORS Request Server (http://localhost:3000)

Wichtig: Programm wird im Client verarbeitet.

Doc: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
*/

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    //Wenn erledigt ...
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        //dann tue ...
        //target contains the request itself
        console.log(evt.target);
    }
});

//URL of the puzzle server
request.open('GET', 'http://localhost:3000/puzzle');
request.send();
