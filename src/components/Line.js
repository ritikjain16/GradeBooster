import React from "react";

const Line = () => {
  return (
    <div
      className="flex"
      style={{ justifyContent: "flex-start", margin: "1rem 0" }}
    >
      <div className="line flex" style={{ justifyContent: "flex-start" }}></div>
      <div className="circle"></div>
    </div>
  );
};

export default Line;
