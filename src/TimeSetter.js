import React, { useState } from "react";

function TimeSetter({ type, defaultTime }) {
  const [time, setTime] = useState(defaultTime);

  let handleClick = e => {
    let { id } = e.target;
    e.preventDefault();
    if (id === "increment") {
      setTime(time + 1);
    } else if (id === "decrement") {
      setTime(time - 1);
    }
  };

  const setterStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  };

  return (
    <div>
      <h2>{`${type} length`}</h2>
      <div style={setterStyle}>
        <h2>
          <button name="increment" onClick={handleClick}>
            <i id="increment" className="fas fa-arrow-up" />
          </button>
          {` ${time} `}
          <button name="decrement" onClick={handleClick}>
            <i id="decrement" className="fas fa-arrow-down" />
          </button>
        </h2>
      </div>
    </div>
  );
}

export default TimeSetter;
