(() => {
  // index.js
  var abbreviateNote = (note) => {
    return `${note.title}:  ${note.content}`.substr(0, 21) + "...";
  };
  var showAllNotes = (notes) => {
    notes.forEach((note) => {
      const divList = document.getElementById("notes-list"), noteElement = document.createElement("a");
      noteElement.href = "";
      noteElement.textContent = abbreviateNote(note);
      divList.appendChild(noteElement);
    });
  };
  var fetchAllNotes = (callback) => {
    fetch("http://localhost:3000/notes").then((response) => response.json().then((notes) => callback(notes)));
  };
  fetchAllNotes((notes) => showAllNotes(notes));
})();
