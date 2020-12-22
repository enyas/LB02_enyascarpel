/*
Thema: Asynchrone Verarbeitung im Web und CORS
 */
/*
Beispiel 2: Anstossen des Puzzleservice mit Fehlerbehandlung

Origin Server: http://localhost:63342
CORS Request to the puzzel server (http://localhost:3000)

Wichtig: Programm wird im Client verarbeitet.

Doc: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
*/

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {
    //https://httpstatuses.com
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        const data = JSON.parse(evt.target.responseText);
        console.log(data);
    } else if (evt.target.readyState === 4) {
        console.log(`Error occured with status ${evt.target.status}`);
    }
});

//URL of the puzzle server with misspelling
request.open('GET', 'http://localhost:3000/puzle');
request.send();
