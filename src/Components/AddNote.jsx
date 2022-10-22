import React from "react";
import { useState } from "react";

const AddNote = ({ handleNewNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleNewNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        name=""
        id=""
        cols="10"
        rows="8"
        placeholder="Type to add note.."
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
      ></textarea>
      <div className="addnote__footer">
        <button className="save__btn" onClick={handleSaveClick}>
          add note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
