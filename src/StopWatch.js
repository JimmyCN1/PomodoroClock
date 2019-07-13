import React, { useState, useEffect } from "react";

function StopWatch({
  breakTime,
  sessionTime,
  sessionActive,
  running,
  paused,
  handleFinishCountDown,
  playAlarm
}) {
  const [min, setMin] = useState(sessionTime);
  const [sec, setSec] = useState(0);

  let minFormatted = new Intl.NumberFormat("en-IN", {
    minimumIntegerDigits: 2
  }).format(min);

  let secFormatted = new Intl.NumberFormat("en-IN", {
    minimumIntegerDigits: 2
  }).format(sec);

  let alarm = new Audio();
  alarm.src =
    "http://www.peter-weinberg.com/files/1014/8073/6015/BeepSound.wav";

  const countdown = () => {
    const minString = minFormatted.toString();
    const secString = secFormatted.toString();
    if (minString === "00" && secString === "00") {
      playAlarm && alarm.play();
      if (sessionActive) {
        setMin(breakTime);
      } else if (!sessionActive) {
        setMin(sessionTime);
      }
      setSec(60);
      handleFinishCountDown();
    } else if (secString === "00") {
      setMin(min - 1);
      setSec(60);
    } else {
      setSec(sec - 1);
    }
  };

  useEffect(() => {
    if (!running) {
      setMin(sessionTime);
      setSec(0);
    } else if (running) {
      if (!paused) {
        const id = setInterval(countdown, 1000);
        return () => clearInterval(id);
      }
    }
  });

  const stopWatchStyle = {
    width: "290px",
    borderStyle: "solid",
    borderColor: "#003249",
    borderWidth: "5px",
    borderRadius: "40px"
  };

  min === 0 && (stopWatchStyle.color = "#A31621");

  return (
    <div style={stopWatchStyle}>
      <h2 style={{ position: "relative", top: "15px" }}>
        {sessionActive === true ? "Session" : "Break"}
      </h2>
      <h1 style={{ fontFamily: "digital-7", fontSize: "6rem", margin: "0px" }}>
        {running ? `${min}:${secFormatted}` : `${sessionTime}:00`}
      </h1>
    </div>
  );
}

export default StopWatch;
