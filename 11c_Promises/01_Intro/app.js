const nachnameEl = document.querySelector('#lr_nachname');
const vornameEl = document.querySelector('#lr_vorname');
const lbIdEl = document.querySelector('#lb_id');
const m1El = document.querySelector('#m1');


function validateForm(form) {
    let id = form.student_id.value;
    if (id == "") {
        alert("Name must be filled out");
        return false;
    }
    console.log(id);
    getStudentCB(id,(err, data) =>{
        if (err) {
            console.log(err);
        } else {
            let student = JSON.parse(data);
            nachnameEl.textContent = student.Nachname;
            vornameEl.textContent = student.Vorname;
            lbIdEl.textContent = student.company_id;
            /*
            getLehrbetriebCB
            ....
                else { ...
            */
                getMarksCB(id,(err, data) =>{
                    if (err) {
                        console.log(err);
                    } else {
                        let marks = JSON.parse(data);
                        let arr = [];
                        for (let row in marks.modulelist) {
                            //TODO: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_appendchild
                            let el = marks.modulelist[row];
                            arr.push(`${el.module}: ${el.mark} `)
                        }
                        m1El.textContent = arr.toString();
                        m1El.append()
                    }
                });

        }
    });
}


