import Body from "./body";
import { Link } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import RotatingText from "../RotatingText/RotatingText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  const handleGitHubClick = () => {
    window.open("https://github.com/rajverma04", "_blank");
  };
  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/rajverma04/", "_blank");
  };
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white px-6 py-10 gap-28 md:gap-20"
    >
      {/* 🧑 Profile Section */}
      <div className="flex justify-center items-center">
        <Body />
      </div>

      {/* 🧠 Text Section */}
      <div className="text-center md:text-left font-audiowide space-y-5 max-w-xl flex flex-col items-center md:items-start">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold">Hey, I'm Raj</h1>

        {/* Rotating Text */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-2xl sm:text-3xl font-bold">
          <span className="text-gray-200">Passionate</span>
          <RotatingText
            texts={["developer", "designer", "creator", "learner"]}
            mainClassName="inline-flex items-center px-3 sm:px-4 bg-[#635bff] text-white py-1 sm:py-1.5 rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>

      
<h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
  Full Stack Web Developer
</h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
          Crafting modern, responsive, and user-friendly websites with passion
          and precision.
        </p>

        {/* ✅ Centered Button — Opens Resume in New Tab */}
        <div className="pt-2 flex gap-3">
          <Link
            to="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#635bff] hover:bg-[#5146e0] text-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-lg hover:shadow-[#635bff]/50"
          >
            View Resume
          </Link>

          {/* GitHub */}
          <li
            className="inline-block bg-[#635bff] hover:bg-[#5146e0] text-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-lg hover:shadow-[#635bff]/50 cursor-pointer"
            onClick={handleGitHubClick}
          >
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            <span className="hidden sm:inline">GitHub</span>
          </li>

          {/* LinkedIn */}
          <li
            className="inline-block bg-[#635bff] hover:bg-[#5146e0] text-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-lg hover:shadow-[#635bff]/50 cursor-pointer"
            onClick={handleLinkedinClick}
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            <span className="hidden sm:inline">LinkedIn</span>
          </li>

        </div>

      </div>
    </section>
  );
}
