import React from "react";
import HeroSection from "./hero-section/hero-section";
import Experiments from "./experiments/experiments";
import AboutUs from "./about-us/about-us";
import Vision from "./vision/vision";
import ContactSection from "./contact-section/contact-section";

const HomeSection = () => {
  return (
    <>
      <HeroSection />
      <Experiments />
      <AboutUs />
      <Vision />
      <ContactSection />
    </>
  );
};

export default HomeSection;
