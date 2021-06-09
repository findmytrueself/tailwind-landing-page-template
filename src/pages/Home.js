import React from "react";

// import Header from "../partials/Header";
import HeroHome from "../partials/HeroHome";
// FeaturesHome from "../partials/Features";
// FeaturesBlocks from "../partials/FeaturesBlocks";
import Testimonials from "../partials/Testimonials";
// Newsletter from "../partials/Newsletter";
// Footer from "../partials/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      {/* <Header /> */}

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesHome />
        <FeaturesBlocks /> */}
        <Testimonials />
        {/* <Newsletter /> */}
      </main>

      {/*  Site footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
