import React from "react";
import ReactDOM from "react-dom/client"
import "./src/index.css"
import TechStack from "./src/techStack";
import Navbar from "./src/navbar";
import GitHubStats from "./github";
import Body from "./src/body";
import TypeWriterText from "./src/typeWriterText";
import LogoLoop from "./LogoLoop/LogoLoop";
import Particles from "./Particles/Particles"
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
  FaCuttlefish,
} from "react-icons/fa";
import RotatingText from "./RotatingText/RotatingText"

const techLogos = [
  { node: <FaHtml5 className="text-5xl text-[#f75403]" />, title: "HTML5" },
  { node: <FaCss3 className="text-5xl text-[#3e9dd7]" />, title: "CSS3" },
  { node: <FaJs className="text-5xl text-[#f4e11e]" />, title: "JavaScript" },
  { node: <FaReact className="text-5xl text-[#20d9ff]" />, title: "React" },
  { node: <FaNodeJs className="text-5xl text-[#3c873a]" />, title: "Node.js" },
  { node: <FaPython className="text-5xl text-[#3776AB]" />, title: "Python" },
  { node: <FaJava className="text-5xl text-[#f89820]" />, title: "Java" },
  { node: <FaGithub className="text-5xl text-white" />, title: "GitHub" },
  { node: <FaGitAlt className="text-5xl text-[#f05032]" />, title: "Git" },
  { node: <FaBootstrap className="text-5xl text-[#8a1bfc]" />, title: "Bootstrap" },
  { node: <FaCuttlefish className="text-5xl text-[#0c4a86]" />, title: "C" },
];

function App() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Particles as Background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* 🌟 Content on Top - Now allows click-through */}
      <div className="relative z-10 pointer-events-none">
        {/* Make individual content elements interactive */}
        <header className="pt-4 pointer-events-auto">
          <Navbar />
        </header>

        <div className="w-full flex flex-row justify-center items-center mt-30 pointer-events-auto">
          <Body></Body>
          <div className="text-center font-audiowide space-y-3 ml-25 pointer-events-auto">
            <h1 className="text-4xl font-bold">
              <TypeWriterText text="Hi, I'm Raj" speed={200}></TypeWriterText>
            </h1>
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4 text-3xl sm:text-4xl font-bold">
              <span className="text-gray-200">Passionate</span>
              <RotatingText
                texts={['developer', 'designer', 'creator', 'learner']}
                mainClassName="inline-flex items-center px-3 sm:px-4 md:px-5 bg-[#635bff] text-white overflow-hidden py-1 sm:py-1.5 md:py-2 rounded-lg w-auto max-w-max"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <h3 className="text-3xl">Full Stack Web Developer</h3>
            <h2 className="text-lg opacity-80">
              Crafting modern, responsive, and user-friendly websites with passion and precision.
            </h2>
          </div>
        </div>
        
        <div className="pointer-events-auto">
          <TechStack></TechStack>
        </div>
        
        <div className="flex justify-center pointer-events-auto">
          {/* Your centered content here */}
        </div>

        <div className="pointer-events-auto">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);