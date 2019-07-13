import React from "react";

function StopWatch({
  breakTime,
  sessionTime,
  sessionActive,
  running,
  setSessionActive
}) {
  const stopWatchStyle = {
    borderStyle: "solid",
    borderColor: "#003249",
    borderWidth: "5px",
    borderRadius: "40px"
  };

  return (
    <div style={stopWatchStyle}>
      <h3>{sessionActive === true ? "Session" : "Break"}</h3>
      <h1>{`${sessionTime}:00`}</h1>
    </div>
  );
}

export default StopWatch;
