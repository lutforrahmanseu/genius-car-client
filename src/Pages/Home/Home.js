import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import TopBanner from "./TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <TopBanner></TopBanner>
    </div>
  );
};

export default Home;
