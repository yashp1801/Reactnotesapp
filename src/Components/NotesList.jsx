import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes, handleNewNote, handleDeleteNote }) => {
  return (
    <div className="notes__list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleNewNote={handleNewNote} />
    </div>
  );
};

export default NotesList;
