import React from "react";
import "./Button.css";

function Control() {
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
        <button>
          {/* <span> */}
          <i className="fas fa-play" />
          <i className="fas fa-pause" />
          {/* </span> */}
        </button>
        &nbsp;&nbsp;
        <button>
          <i className="fas fa-redo-alt" />
        </button>
      </h5>
    </div>
  );
}

export default Control;
