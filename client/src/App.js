import React from "react";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <MainLayout>
      <div id="home" style={{ minHeight: "100vh" }}>
        <Home />
      </div>
      <div id="about" style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <About />
      </div>
      <div id="project" style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <Projects />
      </div>
      <div id="contact" style={{ minHeight: "100vh", paddingTop: "80px" }}>
        <Contact />
      </div>
    </MainLayout>
  );
};

export default App;
