import { DebounceInput } from "react-debounce-input";
import React from "react";

const searchBox = ({ search, setSearch }) => {
  return (
    <div className="search-container">
      <DebounceInput
        type="text"
        value={search}
        placeholder="Search for photo"
        minLength={2}
        debounceTimeout={500}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default searchBox;
