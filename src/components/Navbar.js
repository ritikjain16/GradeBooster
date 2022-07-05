import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CloseNav from "../SmallComponents/CloseNav";
import gradeimg from "../images/gradebooster.jpg";
const Navbar = () => {
  const [smallnavdisplay, setsmallnavdisplay] = useState("none");

  const [imgclass, setimgclass] = useState("");
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (inView) {
        // setimgclass("animheroimg")
        setherotextclass("herotextclass");
      }
    },
  });

  return (
    <nav className="navbar flex sb">
      <div className="gradeb-logo">
        <NavLink to="/" className="menu-item gradeb-text flex">
          <img src={gradeimg} alt="" className="gradeimg" />
          Grade Booster
        </NavLink>
      </div>
      <div className="menu flex nav-small">
        <NavLink to="/" className="menu-item">
          Home
        </NavLink>
        <NavLink to="/about" className="menu-item">
          About
        </NavLink>
        <NavLink to="/services" className="menu-item">
          Services
        </NavLink>
        <NavLink to="/courses" className="menu-item">
          Courses
        </NavLink>
        <NavLink to="/faqs" className="menu-item">
          FAQs
        </NavLink>
        <NavLink to="/contact" className="menu-item">
          Contact
        </NavLink>
      </div>
      <div
        className="nav-ss"
        onClick={() => {
          setsmallnavdisplay("block");
        }}
      >
        <div className="l1 ll"></div>
        <div className="l2 ll"></div>
        <div className="l3 ll"></div>
      </div>
      <div className="new-nav" style={{ display: smallnavdisplay }}>
        <CloseNav setsmallnavdisplay={setsmallnavdisplay} />
        <div className={"menu-s flexc" + " " + herotextclass} ref={ref}>
          <NavLink to="/" className="menu-item1">
            Home
          </NavLink>
          <NavLink to="/about" className="menu-item1">
            About
          </NavLink>
          <NavLink to="/services" className="menu-item1">
            Services
          </NavLink>
          <NavLink to="/courses" className="menu-item1">
            Courses
          </NavLink>
          <NavLink to="/faqs" className="menu-item1">
            FAQs
          </NavLink>
          <NavLink to="/contact" className="menu-item1">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
