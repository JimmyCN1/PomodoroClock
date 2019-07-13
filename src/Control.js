import React from "react";
import "./Button.css";

function Control({ handleControl }) {
  const controlStyle = {
    color: "#003249"
  };

  // const buttonStyle = {
  //   all: "unset"
  // };

  return (
    <div style={controlStyle}>
      <h1>Controls</h1>
      <h5>
        <button onClick={e => handleControl(e)}>
          <div>
            <i id="playPause" className="fas fa-play" />
            <i className="fas fa-pause" />
          </div>
        </button>
        &nbsp;&nbsp;
        <button>
          <i id="reset" className="fas fa-redo-alt" />
        </button>
      </h5>
    </div>
  );
}

export default Control;
