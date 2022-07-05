import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const Footer4 = () => {
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
      <p className="footer-head">Have a Questions?</p>
      <div className="footer-menu">
        <a
          className="footer-single-menu"
          href="https://goo.gl/maps/4c57XDn92qeN7Mse8"
          target="_blank"
        >
          <ion-icon name="location-outline"></ion-icon>
          Baraut, Uttar Pradesh, India
        </a>
        <a className="footer-single-menu" href="tel:+918979478808">
          <ion-icon name="call-outline"></ion-icon>
          +91 9586974123
        </a>
        <a
          className="footer-single-menu"
          href="mailto:gradeboosters16@gmail.com?subject=Hire Ritik for React/React Native/MERN development!&body=Hi, Ritik!%0D%0A We are hiring developers for the post : "
        >
          <ion-icon name="mail-outline"></ion-icon>
          gradeboosters16@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Footer4;
