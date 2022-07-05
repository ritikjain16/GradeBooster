import React, { useState } from "react";
import Line from "./Line";
import SingleCourse from "./SingleCourse";
import { useInView } from "react-intersection-observer";
const Courses = () => {
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setherotextclass("animheroimg");
      }
    },
  });
  return (
    <div className="hero bio-data">
      <div className="flexc" style={{ alignItems: "flex-start" }}>
        <div className={herotextclass} ref={ref}>
          <h2 className="bio-data-text">Courses</h2>
          <Line />
          <p className="para para-latest">
            We are offering courses almost in every field. Some of them are :
          </p>
        </div>
        <div
          className="flex"
          style={{ gap: "1.5rem", flexWrap: "wrap", marginTop: "3rem" }}
        >
          <SingleCourse
            name="accessibility-outline"
            text="Primary"
            para="Primary education takes place in primary school, the elementary school or first and middle school depending on the location."
            id="latestnewworks1"
          />
          <SingleCourse
            name="pencil-outline"
            text="Class 9 to 12"
            para="The main goal of secondary school teachers is to educate the students and help them to develop skills that are necessary for the college or job market."
            id="latestnewworks2"
          />
          <SingleCourse
            name="code-outline"
            text="Engineering"
            para="Engineering is the designing, testing and building of machines, structures and processes using maths and science."
            id="latestnewworks3"
          />
          <SingleCourse
            name="medkit-outline"
            text="Medical"
            para="Medical Engineering (BME) is the application of engineering principles and methods to solve medical and biological problems."
            id="latestnewworks4"
          />
          <SingleCourse
            name="earth-outline"
            text="Arts"
            para="Arts Stream means the provision in secondary schools related to subjects in which students study about social sciences"
            id="latestnewworks5"
          />
          <SingleCourse
            name="bar-chart-outline"
            text="Government Exam"
            para="Crack the government exam and server for your nation."
            id="latestnewworks6"
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
