import React from "react";

import {
  About,
  Contact,
  Header,
  Skills,
  // Testimonial,
  // WorkExperience,
  Work,
  ExperienceTimeline
} from "./containers";

import { Navbar, Footer } from "./components";
import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app">
        <Header />
        <About />
        <Work />
        <Skills />
        <ExperienceTimeline />
        {/* <Testimonial />
      <WorkExperience /> */}
        <Contact />
        <Footer />
      </div>
    </>

  );
};

export default App;
