import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Footer2 = () => {
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
      <p className="footer-head">Links</p>
      <div className="footer-menu">
        <NavLink className="footer-single-menu" to="/">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Home
        </NavLink>
        <NavLink className="footer-single-menu" to="/about">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          About
        </NavLink>
        <NavLink className="footer-single-menu" to="/services">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Services
        </NavLink>
        <NavLink className="footer-single-menu" to="/courses">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Courses
        </NavLink>
        <NavLink className="footer-single-menu" to="/faqs">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          FAQs
        </NavLink>
        <NavLink className="footer-single-menu" to="/contact">
          <ion-icon name="arrow-forward-outline"></ion-icon>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Footer2;
