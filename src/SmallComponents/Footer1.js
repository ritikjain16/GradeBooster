import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const Footer1 = () => {
  const [imgclass, setimgclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setimgclass("workclass");
      }
    },
    // rootMargin: "-50px",
  });

  return (
    <div
      style={{
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
        width: "23rem",
      }}
      className={imgclass}
      ref={ref}
    >
      <p className="footer-head">About</p>
      <p className="footer-menu">
      We are Grade Boosters. Will increase your grades by our super talented teachers.
      </p>
    </div>
  );
};

export default Footer1;
