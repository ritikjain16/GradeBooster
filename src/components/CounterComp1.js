import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const CounterComp1 = ({ num, text }) => {
  const [c1, setc1] = useState(0);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      let targetnumber = 0;
      let interval = setInterval(() => {
        if (c1 > num) {
          setc1(num);
        } else {
          if (targetnumber > num) {
            setc1(num);
            clearInterval(interval);
          } else {
            targetnumber += num / 100;
            setc1(targetnumber);
          }
        }
      }, 10);
    },
  });

  return (
    <div className="counter-part flexc" ref={ref}>
      <h2>{c1}+</h2>
      <p>{text}</p>
    </div>
  );
};

export default CounterComp1;
