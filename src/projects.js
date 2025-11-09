import React from "react";
import { FaExternalLinkAlt, FaCode, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Swiggy Clone",
      description:
        "Developed a web application that fetches real-time restaurant and menu data using the Swiggy Live API. Built with React.js and styled for responsive performance.",
      tech: ["React.js", "API Integration", "CSS"],
      liveLink: "#",
      githubLink: "#",
      date: "Oct 2025",
    },
    {
      title: "GST-INVOICE GENERATOR",
      description:
        "A full-stack web app for generating GST invoices, built using React.js and MongoDB. Deployed and live at Vercel.",
      tech: ["React.js", "MongoDB", "Express.js", "Node.js"],
      // This is the URL that is broken on Vercel's side.
      // You only change this if you have a new, working URL.
      liveLink: "https://gstinvoice.vercel.app", 
      githubLink: "#",
      date: "Aug 2025",
    },
    {
      title: "AI CHATBOT",
      description:
        "A personalized AI-powered chatbot designed to assist students with learning and Q&A. Focused on user experience and intelligent interactions.",
      tech: ["Python", "Flask", "NLP"],
      liveLink: "#",
      githubLink: "#",
      date: "Apr 2025",
    },
    {
      title: "File Distributed System",
      description:
        "Developed a distributed file system for efficient file storage and access using Flask and C++. Focused on backend architecture and scalability.",
      tech: ["Flask", "C++", "Networking"],
      liveLink: "#",
      githubLink: "#",
      date: "Apr 2025",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-black text-white min-h-screen flex flex-col items-center justify-center"
    >
      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-[#a855f7] text-center">
        💻 My Projects
      </h2>

      <div className="max-w-6xl w-full px-6 flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
            
          <div
            key={index}
            className="group bg-[#0f172a] border border-[#a855f7]/30 rounded-xl p-6 w-[320px] sm:w-[360px] 
                       shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] 
                       transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-[#a855f7]">{project.title}</h3>
              <span className="text-sm text-gray-400">{project.date}</span>
            </div>

            <p className="text-gray-300 text-sm mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                
                <span
                  key={i}
                  className="bg-[#a855f7]/20 text-[#a855f7] text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              {/* Live Demo Link */}
              {project.liveLink !== "#" ? (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#7dd3fc] hover:text-[#a855f7] transition text-sm cursor-pointer hover:underline"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              ) : (
                <span className="flex items-center gap-2 text-gray-500 text-sm cursor-not-allowed">
                  <FaExternalLinkAlt /> Demo soon
                </span>
              )}

              {/* GitHub Link */}
              {project.githubLink !== "#" ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
          
                  className="flex items-center gap-2 text-[#7dd3fc] hover:text-[#a855f7] transition text-sm cursor-pointer hover:underline"
                >
                  <FaGithub /> Code
                </a>
              ) : (
                <span className="flex items-center gap-2 text-gray-500 text-sm cursor-not-allowed">
                  <FaCode /> Code soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}