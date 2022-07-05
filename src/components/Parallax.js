import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
const Parallax = () => {
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
    <div className="parallax flexc">
      <div className="overlay-parallax"></div>
      <div className={"parallax-data flexc "+herotextclass} ref={ref}>
        <h2>
        Boost your grades with <span>excellence</span> and <span>fun.</span>
        </h2>
        <p>Grade booster boosts grade, it makes you <b>HERO</b> from{" "}
            <b>Zero.</b> Start today with grade booster and enjoy the learning
            with excellence and fun.</p>
        <a href="mailto:gradeboosters16@gmail.com?subject=Grade Booster New Registration!&body=Hi, Student!%0D%0A Just Provide your details like name, class, school/college name and mobile. %0D%0A We will be right back to you ASAP.">
            <button className="btn">Get Started {">"}</button>
          </a>
      </div>
    </div>
  );
};

export default Parallax;
