import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  //destructuring
  <input
    className="search"
    type="search"
    placeholder={placeholder} //dynamic
    onChange={handleChange}
  />
);
