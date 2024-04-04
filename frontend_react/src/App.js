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
import { BrowserRouter } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <>
      <BrowserRouter >
        <Navbar />

      </BrowserRouter>
      <div className="app">
        <Header />
        <About />
        <Work />
        <Skills />
        <ExperienceTimeline />
        {/* <Testimonial />
      <WorkExperience /> */}
        <Contact />
      </div>
      <Footer />
    </>

  );
};

export default App;
