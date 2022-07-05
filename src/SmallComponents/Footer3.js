import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const Footer3 = () => {
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
    //   rootMargin:"-50px"
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
      <p className="footer-head">Courses</p>
      <div className="footer-menu">
        <a className="footer-single-menu" href="#latestnewworks1">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Primary Teaching
        </a>
        <a className="footer-single-menu" href="#latestnewworks2">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Class 9 to 12
        </a>
        <a className="footer-single-menu" href="#latestnewworks3">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Engineering
        </a>
        <a className="footer-single-menu" href="#latestnewworks4">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Medical
        </a>
        <a className="footer-single-menu" href="#latestnewworks5">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Arts
        </a>
        <a className="footer-single-menu" href="#latestnewworks6">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Government Exam
        </a>
      </div>
    </div>
  );
};

export default Footer3;
