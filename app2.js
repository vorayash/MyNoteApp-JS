

// showing notes on adding notes
function showNote() {


    if (localStorage.getItem('notes') == null) {
        noteD = [];
    }
    else {
        noteD = JSON.parse(localStorage.getItem('notes'));

    }


    let html = "";
    if (noteD.length != 0) {

        noteD.forEach((element, index) => {

            if (element.title.trim() && element.text.trim()) {
                html += `<div class="card noteCard mx-2 my-2" style="width: 21rem;">
                       
                <div class="card-body">
                  <h5 class="card-titl  e">${index + 1}. ${element.title}</h5>
                <p  class="card-text">${element.text}</p>
                <cite class="card-text blockquote-footer my-1" title="Source Title">Date: ${element.date}</cite>
                 <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
              </div>`;

            }

        });
    }
    document.getElementById('notes').innerHTML = html;
    if (localStorage.length == 0) {
        document.getElementById('notes').innerHTML = 'There is nothing to show. Please click on add notes button.';

    }


}






//deleting notes
function deleteNote(index) {

    if (localStorage.getItem('notes') == null) {
        noteD = [];
    }
    else {
        noteD = JSON.parse(localStorage.getItem("notes"));

    }
    noteD.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(noteD));
    showNote();

}


let noteText = document.getElementById("mainCard");
let noteTitle = document.getElementById("inputTitle");


document.querySelector('#addNote').addEventListener('click', function (e) {

    let noteData = localStorage.getItem('notes');
    if (noteData == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(noteData);
    }
    if (noteText.value.trim() && noteTitle.value.trim()) {
        
        notesobj.push({
            title:noteTitle.value,
            text :  noteText.value,
            date: currentDateTime()  });

        localStorage.setItem('notes', JSON.stringify(notesobj));
        noteText.value = '';
        noteTitle.value = '';

    }




    showNote();
});
showNote();


//search Node
let search = document.getElementById("searchBox");
search.addEventListener("input", function () {
    let notes = document.getElementsByClassName("noteCard");
    Array.from(notes).forEach(function (element) {
        let text = element.getElementsByTagName('h5')[0];
        let desc = element.getElementsByTagName('p')[0];
        if (text.innerText.includes(search.value) || desc.innerText.includes(search.value)) {
            text.parentElement.parentElement.style.display = "block";
        }
        else {
            text.parentElement.parentElement.style.display = "none";

        }


    });
});


//current date
function currentDateTime(){
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        return dateTime;
}