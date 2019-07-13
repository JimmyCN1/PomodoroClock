import React from "react";

function TimeSetter({ type, time, handleSetting }) {
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
          <button onClick={e => handleSetting(type, e)}>
            <i id="increment" className="fas fa-arrow-up" />
          </button>
          {` ${time} `}
          <button onClick={e => handleSetting(type, e)}>
            <i id="decrement" className="fas fa-arrow-down" />
          </button>
        </h2>
      </div>
    </div>
  );
}

export default TimeSetter;
