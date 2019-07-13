import React, { useState, useEffect } from "react";

function StopWatch({
  breakTime,
  sessionTime,
  sessionActive,
  running,
  paused,
  setSessionActive
}) {
  const [min, setMin] = useState(sessionTime);
  const [sec, setSec] = useState(0);

  const countdown = () => {
    setMin(min - 1);
    console.log("time changed");
  };

  useEffect(() => {
    console.log("entered use effect");
    if (!running) {
      setMin(sessionTime);
    } else if (running) {
      if (!paused) {
        const id = setInterval(countdown, 1000);
        return () => clearInterval(id);
      }
    }
  });

  const stopWatchStyle = {
    borderStyle: "solid",
    borderColor: "#003249",
    borderWidth: "5px",
    borderRadius: "40px"
  };

  let seconds = new Intl.NumberFormat("en-IN", {
    minimumIntegerDigits: 2
  }).format(0);
  // console.log(seconds);

  return (
    <div style={stopWatchStyle}>
      <h3>{sessionActive === true ? "Session" : "Break"}</h3>
      <h1>{running ? `${min}:00` : `${sessionTime}:00`}</h1>
    </div>
  );
}

export default StopWatch;
