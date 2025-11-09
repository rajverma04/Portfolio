import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
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
      liveLink: "https://gstinvoice.vercel.app",
      githubLink: "https://github.com/rajverma04/gstinvoice",
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

  const openInNewTab = (url) => {
    if (!url || url === "#") return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="projects"
      className="py-20 bg-black text-white min-h-screen flex flex-col items-center"
    >
      <div className="max-w-6xl w-full px-6">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-[#a855f7]">
          💻 My Projects
        </h2>
        <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">
          A selection of projects demonstrating full-stack development, API
          integrations and practical system design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const isLive = project.liveLink && project.liveLink !== "#";
            const hasGithub = project.githubLink && project.githubLink !== "#";

            return (
              <article
                key={i}
                className="group relative bg-[#0f172a] border border-[#a855f7]/25 rounded-2xl p-6
                           shadow-[0_0_18px_rgba(168,85,247,0.18)] hover:shadow-[0_0_36px_rgba(168,85,247,0.35)]
                           transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-[#a855f7]">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400 bg-transparent px-2 py-1 rounded">
                    {project.date}
                  </span>
                </div>

                {/* description */}
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* tech */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full
                                 bg-[#a855f7]/10 text-[#a855f7] inline-block"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* actions */}
                <div className="flex items-center gap-3">
                  {/* Live Demo: if liveLink exists use anchor, otherwise disabled button */}
                  {isLive ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => openInNewTab(project.liveLink)} // fallback
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition
                                 bg-gradient-to-r from-[#34d399] to-[#10b981] text-white hover:opacity-95"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition
                                 bg-gray-700/40 text-gray-400 cursor-not-allowed"
                      aria-disabled
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  )}

                  {/* GitHub: use anchor when available */}
                  {hasGithub ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => openInNewTab(project.githubLink)} // fallback
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition
                                 bg-[#111827] text-white hover:bg-[#0b1220]"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Source</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition
                                 bg-gray-700/40 text-gray-400 cursor-not-allowed"
                      aria-disabled
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Source</span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
