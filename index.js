import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./src/index.css";
import TechStack from "./src/techStack";
import Navbar from "./src/navbar";
import About from "./src/About";
import Resume from "./src/resume";
import Contact from "./src/contact";
import Projects from "./src/projects";
import Education from "./src/education";
import CodingProfiles from "./src/codingProfiles";
import Background3D from "./src/Background3D";
import Loader from "./src/Loader";

// Portfolio Main Component
function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    // Disable right-click
    const disableContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableContextMenu);

    // Cleanup
    return () => {
      clearTimeout(timer);
      document.removeEventListener("contextmenu", disableContextMenu);
    };
  }, []);


  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen text-white relative overflow-hidden">
          <Background3D />

          {/* Fixed Navigation Bar */}
          <header className="fixed top-0 w-full z-50 pointer-events-auto">
            <Navbar />
          </header>

          {/* Main Content with padding to account for fixed navbar */}
          <main className="relative z-10 pt-10">

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <TechStack />

            {/* Projects Section */}
            <Projects />

            {/* Conding Platform */}
            <CodingProfiles />

            {/* Education Section */}
            <Education />

            {/* Contact Section */}
            <Contact />
          </main>
        </div>
      )}
    </>
  );
}

// Main App Component with Routing
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