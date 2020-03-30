import store from './store/store';
import { addNote } from './actions/actions';

//we use store.get() to get our app state from the store
console.log('Before:', store.getState());
store.dispatch(addNote('One', 'One content'));
store.dispatch(addNote('Two', 'Two content'));
store.dispatch(addNote('Three', 'Three content'));
console.log('After:', store.getState()); 

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
    let title = addNoteTitle.value;
    let content = addNoteContent.value;
    store.dispatch(addNote(title,content));
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