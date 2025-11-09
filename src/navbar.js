import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faStar,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

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

  const handleGitHubClick = () => {
    window.open("https://github.com/rajverma04", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/rajverma04/", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-50 py-3 sm:py-4">
      <ul className="flex justify-center gap-8 sm:gap-16 md:gap-20 text-base sm:text-lg">
        {/* About */}
        <li
          className="hover:text-green-600 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("about")}
        >
          <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
          <span className="hidden sm:inline">About</span>
        </li>

        {/* Skills */}
        <li
          className="hover:text-green-600 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("skills")}
        >
          <FontAwesomeIcon icon={faStar} className="w-5 h-5" />
          <span className="hidden sm:inline">Skills</span>
        </li>

        {/* Contact */}
        <li
          className="hover:text-green-600 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("contact")}
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          <span className="hidden sm:inline">Contact</span>
        </li>

        {/* Projects */}
        <li
          className="hover:text-green-600 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={() => scrollToSection("projects")}
        >
          <FontAwesomeIcon icon={faLaptopCode} className="w-5 h-5" />
          <span className="hidden sm:inline">Projects</span>
        </li>

        {/* GitHub */}
        <li
          className="hover:text-green-600 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={handleGitHubClick}
        >
          <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
          <span className="hidden sm:inline">GitHub</span>
        </li>

        {/* LinkedIn */}
        <li
          className="hover:text-green-600 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 cursor-pointer transition duration-300"
          onClick={handleLinkedinClick}
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
          <span className="hidden sm:inline">LinkedIn</span>
        </li>
      </ul>
    </nav>
  );
}
