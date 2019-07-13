import React from "react";

function TimeSetter({ type }) {
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
          <button>
            <i class="fas fa-arrow-up" />
          </button>
          &nbsp;1&nbsp;
          <button>
            <i class="fas fa-arrow-down" />
          </button>
        </h2>
      </div>
    </div>
  );
}

export default TimeSetter;
