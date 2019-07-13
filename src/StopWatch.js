import React from "react";

function StopWatch() {
  const stopWatchStyle = {
    borderStyle: "solid",
    borderColor: "#003249",
    borderWidth: "5px",
    borderRadius: "40px"
  };
  return (
    <div style={stopWatchStyle}>
      <h3>Session</h3>
      <h1>50:00</h1>
    </div>
  );
}

export default StopWatch;
