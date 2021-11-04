const abbreviateNote = (note) => {
  return `${note.title}:  ${note.content}`.substr(0, 21) + '...';
}

const showAllNotes = (notes) => {
  notes.forEach((note) => {
    const divList = document.getElementById('notes-list'),
          noteElement = document.createElement('a');

    noteElement.href = '';
    noteElement.textContent = abbreviateNote(note);
    divList.appendChild(noteElement);
  })
};

const fetchAllNotes = (callback) => {
  fetch('http://localhost:3000/notes')
  .then(response => response.json()
  .then(notes => callback(notes)))
};

const newNoteTitle = document.querySelector('#new-note-title')
const newNoteContent = document.querySelector('#new-note-content')
const newNoteButton = document.querySelector('#new-note-button')

const createNote = (title, content) => {
  let noteObject = {
    title: title,
    content: content
  }
  fetch('http://localhost:3000/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(noteObject)
  })
};

newNoteButton.addEventListener('click', () => {
  createNote(newNoteTitle.value, newNoteContent.value);
});

fetchAllNotes((notes) => showAllNotes(notes))
