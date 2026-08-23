import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./src/index.css";
import TechStack from "./src/techStack";
import Navbar from "./src/navbar";
import About from "./src/About";
import Resume from "./src/resume";
import Contact from "./src/contact";
import Projects from "./src/projects";
import Education from "./src/education";
import CodingProfiles from "./src/codingProfiles";
import Certificates from "./src/certificates";
import Achievements from "./src/achievements";

function Portfolio() {
  return (
    <div className="clay-page">
      <Navbar />
      <main>
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Achievements />
        <CodingProfiles />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
