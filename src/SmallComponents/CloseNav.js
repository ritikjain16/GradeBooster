import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
const CloseNav = ({ setsmallnavdisplay }) => {
  const [imgclass, setimgclass] = useState("");
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (inView) {
        setimgclass("cn1 cnn1");
        setherotextclass("cn2 cnn2");
      }
    },
    // delay: 2000,
  });

  return (
    <div
      className={"close-nav"}
      onClick={() => {
        setsmallnavdisplay("none");
      }}
      ref={ref}
    >
      <div className={"cn " + imgclass}></div>
      <div className={"cn " + herotextclass}></div>
    </div>
  );
};

export default CloseNav;
