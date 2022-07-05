import React, { useState } from "react";
import Line from "./Line";
import Skill from "./Skill";
import { useInView } from "react-intersection-observer";
const AboutUs = () => {
  const [imgclass, setimgclass] = useState("");
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView,) => {
      if (inView) {
        setherotextclass("herotextclass");
      }
    },
  });

  const getoffwidth = () => {
    if (window.outerWidth > 600) {
      return window.outerWidth / 30;
    } else {
      return window.outerWidth / 15;
    }
  };

  const calculateWidth = (per) => {
    if (window.outerWidth > 600) {
      let width = ((window.outerWidth / 30) * per) / 100;
      return width;
    } else {
      let width = ((window.outerWidth / 15) * per) / 100;
      return width;
    }
  };
  return (
    <div className="hero bio-data">
      <div className="flex sb bio-small">
        <div className={herotextclass} ref={ref}>
          <img
            src={"https://media.istockphoto.com/photos/distance-learning-from-home-on-video-conference-call-picture-id1226796079?k=20&m=1226796079&s=612x612&w=0&h=2XZCOaTMqt5tKuJLGNpJVSnYVo0hdL-PuIYEZh0JPJw="}
            alt=""
            className="hero-img bio-img mt small-img"
          />
        </div>
        <div className={"bio-data-right bio-data-small" + " " + imgclass}>
          <div>
            <h2 className="bio-data-text">About Us</h2>
            <Line />
          </div>
          <p className="para">
            We are Grade Boosters. Will increase your grades by our super talented teachers. Currently we have the following specifications:  
          </p>
          <Skill
            name="Teachers"
            width={calculateWidth(90)}
            per="90%"
            ow={getoffwidth()}
          />
          <Skill
            name="Personal Tutors"
            width={calculateWidth(80)}
            per="80%"
            ow={getoffwidth()}
          />
          <Skill
            name="Courses"
            width={calculateWidth(95)}
            per="95%"
            ow={getoffwidth()}
          />
          <Skill
            name="Professionals"
            width={calculateWidth(85)}
            per="85%"
            ow={getoffwidth()}
          />
          <Skill
            name="Video Content"
            width={calculateWidth(92)}
            per="92%"
            ow={getoffwidth()}
          />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
