//Promise producer
const SERVER = "http://localhost:3000";
const getStudentPromise = (id) => {
  return fetch(SERVER+'/students/'+id)
      .then(response => response.text());
}

const getStudentCB = (id, callback) =>

const getModuleMarksPromise = (id) => {
  return fetch(SERVER+'/marks_modules/'+id)
      .then(response => response.text());
}


/*
   Ausgangslage: Die Daten vom Lehrbetrieb fehlen auf der Webseite
    Aufgabe: Daten des Lehrbetrieb anfragen/holen
     a. Erstellen Sie einen Producer getLehrbetriebPromise als Promise (analog wie getModuleMarksPromise)
    um die Lehrbetriebsdaten des jeweiligen Lernenden (Student) anzuzeigen.
    Voraussetzung: für diese Aufgabe ist, dass Sie die Aufgabe mit dem http://localhost:3000/companies
    beim schoolserver gelöst haben.
*/

const getLehrbetriebPromise = (id) => {
  return fetch(SERVER+'/marks_modules/'+id)
      .then(response => response.text());
}