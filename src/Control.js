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
          <i class="fas fa-play" />
          <i class="fas fa-pause" />
          {/* </span> */}
        </button>
        &nbsp;&nbsp;
        <button>
          <i class="fas fa-redo-alt" />
        </button>
      </h5>
    </div>
  );
}

export default Control;
