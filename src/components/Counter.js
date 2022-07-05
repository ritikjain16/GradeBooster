import React from "react";
import CounterComp1 from "./CounterComp1";

const Counter = () => {
  return (
    <div className="hero counter">
      <div className="flex sb counter-small">
        <CounterComp1 num={2000} text="Professional Teachers" />
        <CounterComp1 num={6000} text="Happy Students" />
        <CounterComp1 num={1000} text="Tutors" />
        <CounterComp1 num={3000} text="Courses" />
      </div>
    </div>
  );
};

export default Counter;
