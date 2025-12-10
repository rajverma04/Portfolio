import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressBook,
  faTools,
  faLaptopCode,
  faCode,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { id: "about", label: "Home", icon: faHouse },
    { id: "skills", label: "Skills", icon: faTools },
    { id: "projects", label: "Projects", icon: faLaptopCode },
    { id: "coding", label: "Coding", icon: faCode },
    { id: "education", label: "Education", icon: faGraduationCap },
    { id: "contact", label: "Contact", icon: faAddressBook },
  ];

  return (
    <div
      className={`
        fixed z-50 left-1/2 -translate-x-1/2 transition-all duration-300
        ${isMobile
          ? "bottom-6 w-[90%] max-w-[400px]"
          : "top-6"}
      `}
    >
      <motion.nav
        // Animate from bottom if mobile, from top if desktop
        initial={{ y: isMobile ? 100 : -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          flex items-center 
          ${isMobile ? "justify-around px-2" : "gap-1"}
          bg-[#0f0f16]/90 backdrop-blur-md border border-white/5 rounded-full p-1.5 shadow-lg shadow-purple-500/10
        `}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
                relative rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2
                ${isMobile ? "p-3" : "px-5 py-2.5"}
                ${activeSection === item.id
                ? "bg-[#6d28d9] text-white shadow-lg shadow-purple-500/25"
                : "text-gray-400 hover:text-white hover:bg-white/5 hover:cursor-pointer"}
            `}
          >
            <FontAwesomeIcon icon={item.icon} className={`${isMobile ? "w-5 h-5" : "w-4 h-4"}`} />
            <span className={`${isMobile ? "hidden" : "hidden md:inline"}`}>
              {item.label}
            </span>
          </button>
        ))}
      </motion.nav>
    </div>
  );
}




