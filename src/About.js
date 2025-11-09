import Body from "./body";
import RotatingText from "../RotatingText/RotatingText";
import GradientText from "../GradientText/GradientText";
import { Link } from "react-router-dom";

export default function About() {
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

        {/* Gradient Subheading */}
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <h3 className="text-2xl sm:text-3xl">Full Stack Web Developer</h3>
        </GradientText>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-md">
          Crafting modern, responsive, and user-friendly websites with passion
          and precision.
        </p>

        {/* ✅ Centered Button — Opens Resume in New Tab */}
        <div className="pt-2">
          <Link
            to="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#635bff] hover:bg-[#5146e0] text-white font-semibold px-6 py-2 rounded-lg transition duration-300 shadow-lg hover:shadow-[#635bff]/50"
          >
            View Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
