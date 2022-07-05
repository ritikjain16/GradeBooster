import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
const SingleFAQ = ({ ques, ans }) => {
  const [f1disp, setf1disp] = useState("flex");
  const [f2disp, setf2disp] = useState("none");
  const [arrowdir, setarrowdir] = useState("");
  const [faqhidedisplay, setfaqhidedisplay] = useState("none");

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
    <div>
      <div
        className={"faq " + herotextclass}
        ref={ref}
        onClick={() => {
          if (faqhidedisplay === "none") {
            setfaqhidedisplay("block");
            setarrowdir("faq-arrow-show");
            setf1disp("none");
            setf2disp("flex");
          } else {
            setfaqhidedisplay("none");
            setarrowdir("faq-arrow-hide");
            setf1disp("flex");
            setf2disp("none");
          }
        }}
      >
        <div className="faq-con1 flex sb">
          <p>{ques}</p>
          <div
            className={`faq-toggle flex ` + arrowdir}
            style={{ display: f1disp }}
          >
            v
          </div>
          <div
            className={`faq-toggle flex ` + arrowdir}
            style={{ display: f2disp, transform: "rotate(180deg)" }}
          >
            v
          </div>
        </div>
      </div>
      <div className="faq-hide" style={{ display: faqhidedisplay }}>
        <p>{ans}</p>
      </div>
    </div>
  );
};

export default SingleFAQ;
