import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faStar,
  faLaptopCode,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className="fixed top-0 left-1/2 w-fit z-50 py-2 mt-8"
    >
      <ul className="w-full max-w-[900px] mx-auto flex justify-center items-center text-base sm:text-lg px-6">
        {/* About */}
        <li
          className="hover:text-indigo-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("about")}
        >
          <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
          <span className="hidden sm:inline">About</span>
        </li>

        {/* Skills */}
        <li
          className="hover:text-indigo-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("skills")}
        >
          <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
          <span className="hidden sm:inline">Skills</span>
        </li>

        {/* Projects */}
        <li
          className="hover:text-indigo-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("projects")}
        >
          <FontAwesomeIcon icon={faLaptopCode} className="w-5 h-5" />
          <span className="hidden sm:inline">Projects</span>
        </li>

        {/* Coding */}
        <li
          className="hover:text-indigo-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("coding")}
        >
          <FontAwesomeIcon icon={faCode} className="w-5 h-5" />
          <span className="hidden sm:inline">Coding</span>
        </li>

        {/* Contact */}
        <li
          className="hover:text-indigo-400 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("contact")}
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          <span className="hidden sm:inline">Contact</span>
        </li>
      </ul>
    </motion.nav>
  );

}
