import React from "react";
import "./App.css";

import TimeSetter from "./TimeSetter";
import StopWatch from "./StopWatch";
import Control from "./Control";

function App() {
  const appStyle = {
    display: "flex",
    alignItems: "center"
    // justifyContent: "center"
  };

  return (
    <div className="App" style={appStyle}>
      <div className="container">
        <h1>Pomodoro Clock</h1>
        <div className="row">
          <div className="col-sm-6">
            <TimeSetter type="Break" />
          </div>
          <div className="col-sm-6">
            <TimeSetter type="Session" />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <StopWatch />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Control />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
