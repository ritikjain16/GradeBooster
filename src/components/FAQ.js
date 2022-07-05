import React from "react";
import Line from "./Line";
import SingleFAQ from "./SingleFAQ";

const FAQ = () => {
  const faqs = [
    {
      ques: "Are GradeBooster programs applicable for all classes?",
      ans: "GradeBooster learning programs are for students from LKG to Class 12.We also offer programs for competitive exams like JEE, NEET, and IAS.",
    },
    {
      ques: "How do I get started?",
      ans: "Download the app or connect with our team at +91 9456879412 for a free demo session.",
    },
    {
      ques: "Do all programs have live-doubt solving?",
      ans: "Live doubt-solving feature is available as a part of GradeBooster Classes offering.",
    },
    {
      ques: "What is a free demo class and how do I register for it?",
      ans: "Your child can attend a free demo class by our top teachers to experience our programmes first-hand. This is a great way to understand GradeBooster way of teaching. Our counselor will help book a demo class for you at your convenience.",
    },
    {
      ques: "Are GradeBooster programs mapped to the school syllabus/curriculum?",
      ans: "Yes, the programs are personalised for students as per the school syllabus.",
    },
    {
      ques: "How is GradeBooster Classes different from GradeBooster – The Learning App?",
      ans: "GradeBooster Classes is a comprehensive online tutoring program. It brings together online classes by India’s top teachers along with instant doubt resolution. Your child can revise through extra classes with GradeBooster assigned teachers and access lessons on the GradeBooster app too. Additionally, GradeBooster Classes offer monthly tests along with comprehensive monthly progress reports.",
    },
    {
        ques:"Do GradeBooster learning programs need the internet?",
        ans:"Yes. Internet connection is required for the app to work unless you have bought a paid version that comes with an SD card."
    }
  ];

  return (
    <div className="hero bio-data">
      <div className="flexc" style={{ alignItems: "flex-start" }}>
        <div>
          <h2 className="bio-data-text">FAQs</h2>
          <Line />
        </div>
        <div
          className="flex"
          style={{ gap: "2rem", flexWrap: "wrap", marginTop: "3rem" }}
        >
          {faqs.map((item, index) => (
            <SingleFAQ key={index} ques={item.ques} ans={item.ans} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
