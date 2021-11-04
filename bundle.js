(() => {
  // index.js
  var showAllNotes = (notes) => {
    console.log(notes);
  };
  var fetchAllNotes = (callback) => {
    fetch("http://localhost:3000/notes").then((response) => response.json().then((notes) => callback(notes)));
  };
  fetchAllNotes((notes) => showAllNotes(notes));
})();
