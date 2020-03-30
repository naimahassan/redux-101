// ------ HTML references ------
let notesUList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let addNoteTitle = addNoteForm['title'];
let addNoteContent = addNoteForm['content'];

// ------ redux ------
function deleteNote(index){
    //console.log(index);
}

function renderNotes(){
    setDeleteNoteButtonEventListeners();
}

// ------ Event Listener ------

addNoteForm.addEventListener('submit',(e) => {
    e.preventDefault();
    //console.log('Title:',addNoteTitle.value, 'Content:',addNoteContent.value)
});

function setDeleteNoteButtonEventListeners(){
    let buttons =document.querySelectorAll('ul#note li button');
    for (let button of buttons){
        button.addEventListener('click',() => {
            deleteNote(button.CDATA_SECTION_NODE.id);
        });
    }
}

// ------ render the initial notes ------

renderNotes();