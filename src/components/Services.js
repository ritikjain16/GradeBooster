import React, { useEffect, useState } from "react";
import Line from "./Line";
import SingleService from "./SingleService";
import { useInView } from "react-intersection-observer";
const Services = () => {
  const [herotextclass, setherotextclass] = useState("");

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root: null,
    triggerOnce: true,
    onChange: (inView, entry) => {
      if (entry.isIntersecting) {
        setherotextclass("herotextclass");
      }
    },
    rootMargin: "-100px",
  });

  return (
    <div className="hero bio-data">
      <div className="flexc" style={{ alignItems: "flex-start" }}>
        <div className={herotextclass} ref={ref}>
          <h2 className="bio-data-text">Our Services</h2>
          <Line />
          <p className="para para-latest">
            Explore our latest and techy <b>services</b> which makes your
            thinking incredible and powerful.
          </p>
        </div>
        <div
          className="flex"
          style={{ gap: "1rem", flexWrap: "wrap", marginTop: "3rem" }}
        >
          <SingleService
            name="Teachers"
            image={
              "https://media.istockphoto.com/photos/indian-woman-customer-care-representative-sitting-on-chair-at-home-picture-id1310210704?k=20&m=1310210704&s=612x612&w=0&h=MfZtXoOu9TlrXa-QGgdy3i9BBVjGMnQqnB3rhGBPOCc="
            }
          />

          <SingleService
            name="E-learning"
            image={
              "https://media.istockphoto.com/photos/elearning-icon-concept-picture-id1333702151?k=20&m=1333702151&s=612x612&w=0&h=f4vHu_p9B9DF5QBhvH40FnHMSr6cQIuGJAaiccmrXKg="
            }
          />

          <SingleService
            name="Artificial Intelligence"
            image={
              "https://media.istockphoto.com/photos/cyborg-teacher-or-lecturer-picture-id954072938?k=20&m=954072938&s=612x612&w=0&h=FNtCcgD7WE_F6-7sNwY_19Nzr1_-qzsrnoj4ys0kKpE="
            }
          />

          <SingleService
            name={"Online Tutors"}
            image={
              "https://media.istockphoto.com/photos/businessman-participates-at-negotiations-by-videocall-via-screen-picture-id1224889798?k=20&m=1224889798&s=612x612&w=0&h=3912XKk9OH4d_l6cFCMQsJ2EOwIz_oeonOULvO3C7io="
            }
          />

          <SingleService
            name="Creative Professionals"
            image={
              "https://media.istockphoto.com/photos/innovative-idea-picture-id1304835378?k=20&m=1304835378&s=612x612&w=0&h=n1_1q7VZRCZrSrlFd9vZU4kE4QYViheR_0Ta98SO28I="
            }
          />

          <SingleService
            name="Video Content"
            image={
              "https://media.istockphoto.com/photos/concept-contents-concept-social-networking-service-streaming-video-picture-id1256603037?k=20&m=1256603037&s=612x612&w=0&h=4_7Wm_jLHTx4Jv3Pm__UWyICgDQYY7Uz-iqFVZXVSU0="
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
