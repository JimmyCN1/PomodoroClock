import React from "react";
import "./Button.css";

function Control({ handleControl, playAlarm }) {
  const controlStyle = {
    color: "#003249"
  };

  const buttonStyle = { position: "relative", top: "15px" };

  return (
    <div style={controlStyle}>
      <h5 style={buttonStyle}>
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
      <h5 style={buttonStyle}>
        <button onClick={e => handleControl(e)}>
          {playAlarm ? (
            <i id="alarm" className="fas fa-bell" />
          ) : (
            <i id="alarm" className="fas fa-bell-slash" />
          )}
        </button>
      </h5>
    </div>
  );
}

export default Control;
