import React from "react";
import HeroSection from "./products-hero-section/products-hero-section";
import Visualizations from "./visualizations/visualization";
import ComputerSolution from "./computer-solutions/computer-solution";
import EdgeCloud from "./edge-cloud/edge-cloud ";
import ProductDelivery from "./product-delivery/product-delivery";
import ProjectSteps from "./project-step/project-step";
import Mission from "./mission/mission";
import ContactUs from "./contact-us/contact-us";
import Testimonials from "./testimonials/testimonials";
import OurProjects from "./our-projects/our-projects";

const Products = () => {
  return (
    <>
      <HeroSection />
      <ComputerSolution />
      <Visualizations />
      <EdgeCloud />
      <ProductDelivery />
      <ProjectSteps />
      <Mission />
      <OurProjects />
      {/* <Testimonials /> */}
      <ContactUs />
    </>
  );
};

export default Products;
