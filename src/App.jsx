import React from "react";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import PizzaCard from "./components/PizzaCard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <About />
      <PizzaCard />
      <Footer />
    </div>
  );
};

export default App;
