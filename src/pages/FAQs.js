import React, { useEffect } from "react";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const FAQs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <FAQ />
      <Footer />
    </div>
  );
};

export default FAQs;
