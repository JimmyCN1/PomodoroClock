import React, { useState } from "react";
import "./App.css";

import TimeSetter from "./TimeSetter";
import StopWatch from "./StopWatch";
import Control from "./Control";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [sessionActive, toggleSessionActive] = useState(true);

  const handleSetting = (type, e) => {
    let button = type.toLowerCase();
    let { id } = e.target;
    e.preventDefault();
    if (button === "break") {
      if (id === "increment") {
        setBreakTime(breakTime + 1);
      } else if (id === "decrement") {
        breakTime > 1 && setBreakTime(breakTime - 1);
      }
    } else if (button === "session") {
      if (id === "increment") {
        setSessionTime(sessionTime + 1);
      } else if (id === "decrement") {
        sessionTime > 1 && setSessionTime(sessionTime - 1);
      }
    }
  };

  const appStyle = {
    display: "flex",
    alignItems: "center"
  };

  return (
    <div className="App" style={appStyle}>
      <div className="container">
        <h1>Pomodoro Clock</h1>
        <div className="row">
          <div className="col-sm-6">
            <TimeSetter
              type="Break"
              handleSetting={handleSetting}
              time={breakTime}
            />
          </div>
          <div className="col-sm-6">
            <TimeSetter
              type="Session"
              handleSetting={handleSetting}
              time={sessionTime}
            />
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
