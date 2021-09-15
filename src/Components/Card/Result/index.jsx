import React from "react";

import "./style.css";

export const Result = ({ res,isPlaying }) => {
  if (!res[0]) {
    return <h3>Result will be shown here</h3>;
  } else {
    const { word, meanings, origin, phonetic, phonetics } = res[0];
    return (
      <fieldset className="result">
        <legend>{word}</legend>
        <label>phonetic : {phonetic} </label>
        <label>origin : {origin}</label>
        <div className="pronounciation">
          pronounciation :
          {/* <audio className="audio" controls >
            <source src={isPlaying} type="audio/mp3" />
          </audio> */}
          <audio className="audio" controls >
            <source src={phonetics[0].audio} type="audio/mp3" />
          </audio>
        </div>
      </fieldset>
    );
  }
};
