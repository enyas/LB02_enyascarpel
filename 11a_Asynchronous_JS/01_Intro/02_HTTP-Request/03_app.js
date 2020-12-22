/*
Thema: Asynchrone Verarbeitung im Web und CORS
 */
/*
Beispiel 1: Anstossen des Puzzleservice.

Origin Server: http://localhost:63342
CORS Request to the puzzel server (http://localhost:3000)

Wichtig: Programm wird im Client verarbeitet.

Doc: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json));

fetch('http://localhost:3000/puzzle')
    .then(response => response.json())
    .then(json => console.log(json));
