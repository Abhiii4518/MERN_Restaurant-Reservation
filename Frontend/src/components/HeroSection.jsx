import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Delicious Food Dishes</h1>
            <p class="sub-title">
              Bringing the taste of India to your plate. Fresh, flavorful,
              unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
