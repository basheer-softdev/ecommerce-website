import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import NewArrivals from "../components/NewArrivals";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import TopSelling from "../components/TopSelling";

const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <NewArrivals />
      <TopSelling />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
