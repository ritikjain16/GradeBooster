import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Services1 from "../components/Services";
import Navbar from "../components/Navbar";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Services1 />
      <Footer />
    </div>
  );
};

export default Services;
