import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
const SingleService = ({ name, image }) => {
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setherotextclass("workclass");
      }
    },
  });

  return (
    <div
      className={"work-img flexc" + " " + herotextclass}
      style={{ position: "relative" }}
      ref={ref}
    >
      <img src={image} className="work-img1" alt="" />
      <div className="overlay flex">
        <p style={{ textAlign: "center" }} className="overlay-link">
          {name}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
