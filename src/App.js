import React, { useState } from "react";
import "./App.css";

import TimeSetter from "./TimeSetter";
import StopWatch from "./StopWatch";
import Control from "./Control";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [sessionActive, setSessionActive] = useState(true);
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(true);
  const [playAlarm, setPlayAlarm] = useState(true);

  const handleSetting = (type, e) => {
    let setter = type.toLowerCase();
    let { id } = e.target;
    e.preventDefault();
    if (!running) {
      if (setter === "break") {
        if (id === "increment") {
          setBreakTime(breakTime + 1);
        } else if (id === "decrement") {
          breakTime > 1 && setBreakTime(breakTime - 1);
        }
      } else if (setter === "session") {
        if (id === "increment") {
          setSessionTime(sessionTime + 1);
        } else if (id === "decrement") {
          sessionTime > 1 && setSessionTime(sessionTime - 1);
        }
      }
    }
  };

  const handleFinishCountDown = () => setSessionActive(!sessionActive);

  const handleControl = e => {
    let { id } = e.target;
    if (id === "playPause") {
      setRunning(true);
      setPaused(!paused);
    } else if (id === "reset") {
      setRunning(false);
      setPaused(true);
      setSessionActive(true);
    } else if (id === "alarm") {
      setPlayAlarm(!playAlarm);
    }
  };

  const appStyle = {
    display: "flex",
    alignItems: "center"
  };

  // window.innerWidth < 576 && (appStyle.alignItems = "flex-start");

  return (
    <div className="App" style={appStyle}>
      <div className="container" style={{ maxWidth: "500px" }}>
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
          <div
            className="col"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <StopWatch
              breakTime={breakTime}
              sessionTime={sessionTime}
              sessionActive={sessionActive}
              running={running}
              paused={paused}
              handleSessionActive={setSessionActive}
              handleFinishCountDown={handleFinishCountDown}
              playAlarm={playAlarm}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Control handleControl={handleControl} playAlarm={playAlarm} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
