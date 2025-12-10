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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for the fixed navbar
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
        threshold: 0.2, // Trigger slightly earlier
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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-1 bg-[#0f0f16]/90 backdrop-blur-md border border-white/5 rounded-full p-1.5 shadow-lg shadow-purple-500/10"
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
                relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${activeSection === item.id
                ? "bg-[#6d28d9] text-white shadow-lg shadow-purple-500/25"
                : "text-gray-400 hover:text-white hover:bg-white/5 hover:cursor-pointer"}
            `}
          >
            <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
            <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}
      </motion.nav>
    </div>
  );
}
