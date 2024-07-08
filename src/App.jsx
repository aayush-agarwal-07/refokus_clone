import LocomotiveScroll from "locomotive-scroll";
import React from "react";
import Box from "./components/Box";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="min-w-screen min-h-screen bg-[#000000] text-zinc-200">
      <Navbar />
      <HeroSection />
      <Box />
      <Marquees />

      <Products />
      <Stripes />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
