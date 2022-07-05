import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Footer1 from "../SmallComponents/Footer1";
import Footer2 from "../SmallComponents/Footer2";
import Footer3 from "../SmallComponents/Footer3";
import Footer4 from "../SmallComponents/Footer4";
import Footer5 from "../SmallComponents/Footer5";
const Footer = () => {
  const [topdisplay, settopdisplay] = useState("none");

  useEffect(() => {
    let interval = setInterval(() => {
      if (window.scrollY >= 1500) {
        settopdisplay("block");
      } else {
        settopdisplay("none");
      }
    }, 0);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [imgclass, setimgclass] = useState("");
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setimgclass("workclass");
        setherotextclass("workclass");
      }
    },
    delay: 1000,
  });

  return (
    <div className="hero footer">
      <div className="flex sb footer-small ais">
        <Footer1 />
        <Footer2 />
        <Footer3 />
        <Footer4 />
      </div>
      <Footer5 />

      <div
        className="arrow-up-my"
        style={{ display: topdisplay }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <ion-icon name="arrow-up-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Footer;
