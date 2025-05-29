import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              At <span className="lgTxt1">Taste</span><span className="lgTxt2">Mosaic</span>, food is more than just a meal — it's an
              experience. Our journey began with a simple passion for bringing
              people together over delicious, wholesome, and freshly-prepared
              dishes. We believe that great food starts with great ingredients,
              which is why we carefully select the freshest produce, authentic
              spices, and quality meats to craft meals that nourish both body
              and soul. Whether you're here for a quick bite, a family dinner,
              or a cozy meal with friends, our goal is to serve food that not
              only satisfies your hunger but also warms your heart. With a menu
              inspired by flavors from around the world and a team dedicated to
              exceptional service, we strive to make every visit memorable. Come
              and discover why the only thing we’re serious about is food.
            </p>
            <div className="btn">
              <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
            </div>
          </div>
          <div className="banner">
            <img className="bannerImg" src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
