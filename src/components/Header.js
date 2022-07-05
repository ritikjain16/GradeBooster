import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
const Header = () => {
  const [imgclass, setimgclass] = useState("");
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setimgclass("animheroimg");
        setherotextclass("herotextclass");
      }
    },
  });

  return (
    <div className="hero hero-bg">
      <div className="flex sb hero-small">
        <div
          style={{ marginRight: "2rem" }}
          ref={ref}
          className={herotextclass}
        >
          <h1 className="hero-text hero-text-new">Grade Booster</h1>
          <p className="para hero-para" style={{ fontSize: "1.7rem" }}>
            Boost your grades with <b>excellence</b> and <b>fun</b>.
          </p>

          <p className="para hero-para">
            Grade booster boosts grade, it makes you <b>HERO</b> from{" "}
            <b>Zero.</b> Start today with grade booster and enjoy the learning
            with excellence and fun.
          </p>
          <a href="mailto:gradeboosters16@gmail.com?subject=Grade Booster New Registration!&body=Hi, Student!%0D%0A Just Provide your details like name, class, school/college name and mobile. %0D%0A We will be right back to you ASAP.">
            <button className="btn">Get Started {">"}</button>
          </a>
        </div>
        <div className={imgclass} ref={ref}>
          <img
            src={
              "https://media.istockphoto.com/photos/education-concepts-picture-id500648082?k=20&m=500648082&s=612x612&w=0&h=wdXzEhZnuyeOmVe-JO7JzNuPBOdape9T2t1R17OKfX0="
            }
            alt=""
            className="hero-img mt small-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
