import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="search note"
        onChange={(e) => handleSearchNote(e.target.value)}
      />
      <BiSearchAlt className="search__icon" />
    </div>
  );
};

export default Search;
