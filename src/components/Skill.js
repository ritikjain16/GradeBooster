import React from "react";

const Skill = ({ name, width, per,ow }) => {
  return (
    <div className="skill">
      <h2 className="skill-text">{name}</h2>
      <div className="bar-con">
        <div className="skill-bg-bar" style={{width:ow+"rem"}}></div>
        <div className="skill-front-bar" style={{ width: width + "rem" }}></div>
        <div className="skill-per" style={{ left: width - 2.2 + "rem" }}>
          {per}
        </div>
      </div>
    </div>
  );
};

export default Skill;
