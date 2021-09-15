import React from "react";

import "./style.css";

export const Result = ({ res, inputRef }) => {
  if (!res[0]) {
    return <h3>Result will be shown here</h3>;
  } else {
    const { word, meanings, origin, phonetic, phonetics } = res[0];
    const definitionsArr = meanings.map((m) => m.definitions).map((def) => def[0]);

    return (
      <fieldset className="result">
        <legend>{word.toUpperCase()}</legend>
        <label>phonetic : {phonetic} </label>
        <label>origin : {origin}</label>
        {definitionsArr.map((e,i)=><li key={i}>{e.definition}Example: {e.example} </li>)}
        <div className="pronounciation">
          pronunciation :
          <audio className="audio" ref={inputRef} controls>
            <source src={phonetics[0].audio} type="audio/mp3" />
          </audio>
        </div>

      </fieldset>
    );
  }
};
