

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

            if (element.trim()) {
                html += `<div class="card noteCard mx-2 my-2" style="width: 21  rem;">
                   
            <div class="card-body">
              <h5 class="card-title">Note ${index}</h5>
            <p  class="card-text">${element}</p>
             
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>`;
                
            }

        });

    }
    document.getElementById('notes').innerHTML = html;
    if (localStorage.getItem('notes') == null) {
        document.getElementById('notes').innerHTML = 'There is nothing to show. Please click on add notes button.';

    }

}






//deleting notes
function deleteNote(index){
    
    if (localStorage.getItem('notes') == null) {
        noteD = [];
    }
    else {
        noteD = JSON.parse(localStorage.getItem("notes"));

    }
    noteD.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(noteD));
    showNote();

}


let noteText = document.getElementById("mainCard");


document.querySelector('#addNote').addEventListener('click', function (e) {

    let noteData = localStorage.getItem('notes');
    if (noteData == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(noteData);
    }
    if (noteText.value.trim()) {
        notesobj.push(noteText.value);
        localStorage.setItem('notes', JSON.stringify(notesobj));
    }
    noteText.value = ' ';

    showNote();
});
showNote();


//search Node
let search = document.getElementById("searchBox");
search.addEventListener("input",function(){
    let notes = document.getElementsByClassName("noteCard");
    Array.from(notes).forEach(function(element){
        let text = element.getElementsByTagName('h5')[0];
        let desc = element.getElementsByTagName('p')[0];
        if(text.innerText.includes(search.value) || desc.innerText.includes(search.value))
        {
            text.parentElement.parentElement.style.display = "block";
        }
        else{
            text.parentElement.parentElement.style.display = "none";

        }
        

    });
})
