import React from "react";

import './style.css';

export const Form = ({ handleSubmit, handleChange }) => (
  <form className="form" onSubmit={handleSubmit}>
      <p className="logo">Online dictionary</p>
    <input
      className="input"
      type="text"
      name="name"
      placeholder="Enter the word you want to search for .."
      onChange={handleChange}
    />
    <input className="submit" type="submit" value="Search" />
  </form>
);
