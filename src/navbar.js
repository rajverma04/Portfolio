import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faAddressBook,
  faTools,
  faLaptopCode,
  faCode,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const items = [
    { id: "about", label: "Home", icon: faHouse },
    { id: "skills", label: "Skills", icon: faTools },
    { id: "projects", label: "Work", icon: faLaptopCode },
    { id: "coding", label: "Coding", icon: faCode },
    { id: "education", label: "Journey", icon: faGraduationCap },
    { id: "contact", label: "Contact", icon: faAddressBook },
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActiveSection(entry.target.id),
        ),
      { threshold: 0.3 },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const scrollTo = (id) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <nav className="clay-nav clay-panel">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`clay-nav-item ${activeSection === item.id ? "active" : ""}`}
        >
          <FontAwesomeIcon icon={item.icon} />
          <span className="clay-nav-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
