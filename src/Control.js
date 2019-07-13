import React from "react";
import "./Button.css";

function Control({ handleControl }) {
  const controlStyle = {
    color: "#003249"
  };

  return (
    <div style={controlStyle}>
      <h5 style={{ position: "relative", top: "15px" }}>
        <button onClick={e => handleControl(e)}>
          <div>
            <i id="playPause" className="fas fa-play" />
            <i className="fas fa-pause" />
          </div>
        </button>
        &nbsp;&nbsp;
        <button onClick={e => handleControl(e)}>
          <i id="reset" className="fas fa-redo-alt" />
        </button>
      </h5>
    </div>
  );
}

export default Control;
