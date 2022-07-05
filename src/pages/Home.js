import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import Counter from "../components/Counter";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Courses from "../components/Courses";
import Services from "../components/Services";
import Navbar from "../components/Navbar";
import Parallax from "../components/Parallax";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <Counter />
      <Courses />
      <FAQ/>
      <Parallax />
      <Footer />
    </div>
  );
};

export default Home;
