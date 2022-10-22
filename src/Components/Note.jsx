import React from "react";
import { MdDelete } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note__footer">
        <span>{date}</span>
        <MdDelete
          className="note__footer__icon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
