import React, { useEffect } from "react";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Courses1 from "../components/Courses";
import Navbar from "../components/Navbar";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Courses1 />
      <Counter />
      <Footer />
    </div>
  );
};

export default Portfolio;
