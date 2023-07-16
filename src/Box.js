import React from "react";
import "./Box.css";

const Box = ({ removeBox, height, width, bgColor, id }) => {
  return (
    <div className={`Box ${bgColor}`}>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: bgColor,
        }}
      ></div>
      <button onClick={() => removeBox(id)} className="Box-btn">
        X
      </button>
    </div>
  );
};

export default Box;
