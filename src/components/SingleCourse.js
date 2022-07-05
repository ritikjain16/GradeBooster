import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
const SingleCourse = ({ name, text,para,id }) => {
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setherotextclass("workclass");
      }
    },
  });

  return (
    <div className={"new-work" + " " + herotextclass} ref={ref} id={id}>
      <ion-icon className="work-icon" name={name}></ion-icon>
      <h3 className="new-text" style={{textAlign:"center"}}>{text}</h3>
      <p className="para" style={{ textAlign: "center" }}>
        "{para}"
      </p>
    </div>
  );
};

export default SingleCourse;
