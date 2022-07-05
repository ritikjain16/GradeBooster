import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const Footer5 = () => {
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setherotextclass("animheroimg");
      }
    },
    // delay: 1000,
  });

  return (
    <div ref={ref} className={herotextclass}>
      <div className="footer-icons flex">
        <a
          className="footer-single-menu"
          href="https://api.whatsapp.com/send?phone=+918979478808"
          target="_blank"
        >
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
        <a
          className="footer-single-menu"
          href="https://www.instagram.com/ravishing_ritik/?hl=en"
          target="_blank"
        >
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        
        <a
          className="footer-single-menu"
          href="https://www.facebook.com/ritik.jain.37669528/"
          target="_blank"
        >
          <ion-icon name="logo-facebook"></ion-icon>
        </a>

      </div>
      <div className="flex footer-single-menu">
        <p
          style={{ fontSize: "1.8rem", marginTop: "2rem", textAlign: "center" }}
        >
          Copyright ©2022 All rights reserved | This template is made with ❤ by
          Ravishing Ritik
        </p>
      </div>
    </div>
  );
};

export default Footer5;
