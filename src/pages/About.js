import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default About;
