import React from "react";

import './style.css';

export const Form = ({ handleSubmit, handleChange }) => (
  <form className="form" onSubmit={handleSubmit}>
    <input
      className="input"
      type="text"
      name="name"
      placeholder="Enter the word you want to search for"
      onChange={handleChange}
    />
    <input className="submit" type="submit" value="Search" />
  </form>
);
