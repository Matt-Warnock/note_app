const showAllNotes = (notes) => {
  console.log(notes)
  // document.createElement
};

const fetchAllNotes = (callback) => {
  fetch('http://localhost:3000/notes')
  .then(response => response.json()
  .then(notes => callback(notes)))
};

fetchAllNotes((notes) => showAllNotes(notes))
