import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const SearchBar = () => {
  return (
    <>
      <div className="search-bar-container">
        <div className="search-text">
          <input
            placeholder="Search"
            style={{ border: "0", outline: "none" }}
          ></input>
        </div>
        <div className="search-icon">
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "#1c1c58" }}
            size="lg"
          />
        </div>
      </div>
    </>
  );
};
export default SearchBar;
