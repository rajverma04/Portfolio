import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const images = {
  codeNexus: new URL("./image/codenexus.jpg", import.meta.url).href,
  gst: new URL("./image/gstImg.jpg", import.meta.url).href,
  sandbox: new URL("./image/sandboxed-compiler.jpg", import.meta.url).href,
  taksy: new URL("./image/taksyImg.jpg", import.meta.url).href,
  ai: new URL("./image/ailearning.jpg", import.meta.url).href,
  files: new URL("./image/filedistribution.jpg", import.meta.url).href,
};
const projects = [
  {
    title: "Sandboxed Docker Code Execution Microservice",
    date: "JUL — AUG 26",
    img: images.sandbox,
    description:
      "A secure Node.js and Express.js microservice for compiling and executing C++, Java, and JavaScript submissions inside isolated Docker containers. It uses network isolation, read-only mounts, 256MB memory limits, 10-second timeouts, authenticated REST APIs, batch evaluation, cgroups v2 resource monitoring, high-resolution timing, health checks, and automated cleanup workflows.",
    tech: [
      "Node.js",
      "Express.js",
      "Docker",
      "C++",
      "Java",
      "JavaScript",
      "Linux",
      "REST APIs",
      "cgroups v2",
    ],
    github: "https://github.com/rajverma04/docker-code-executor",
  },
  {
    title: "CodeNexus",
    date: "JUN — JUL 26",
    img: images.codeNexus,
    description:
      "An online coding practice and evaluation platform with backend services for problem management, code submissions, test-case evaluation, and execution result processing. Integrated a custom Docker-based compiler microservice for isolated, resource-constrained C++, Java, and JavaScript execution. Implemented Redis-backed JWT revocation with TTL expiration, JWT, OTP email verification, OAuth 2.0, and Zod request validation. Built Gemini-powered debugging for contextual compilation and runtime error fixes with external-service failure handling. Added route-specific rate limiting and Express JSON request-body size limits to prevent oversized payloads and strengthen API security.",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Custom Compiler",
      "Docker",
      "Gemini API",
      "JWT",
      "OAuth 2.0",
      "Zod",
      "Rate Limiting",
    ],
    live: "https://codenexusdev.vercel.app/",
    github: "https://github.com/rajverma04/CodeNexus",
  },
  {
    title: "GST Invoice App",
    date: "APR 26",
    img: images.gst,
    description:
      "A cross-platform billing app for GST-compliant invoices with live tax calculation, PDF generation, sharing, and REST API integration.",
    tech: ["React Native", "Expo", "TypeScript", "Axios"],
    live: "https://drive.google.com/file/d/1emlNw-iFRW1qSLyqL58qaDPP_DqMNCzX/view",
    github: "https://github.com/rajverma04/gstinvoice-app",
  },
  {
    title: "Taksy",
    date: "JAN — FEB 26",
    img: images.taksy,
    description:
      "A real-time chat application with encrypted messaging, room-based architecture, file sharing, reactions, and message editing.",
    tech: ["MERN", "WebSocket", "MongoDB", "E2E encryption"],
    live: "https://chat-appdev.vercel.app/",
    github: "https://github.com/rajverma04/ChatApp",
  },
  {
    title: "AI Personalized Learning",
    date: "APR 25",
    img: images.ai,
    description:
      "A personalized AI chatbot designed to assist students with learning and Q&A through friendly intelligent interactions.",
    tech: ["Python", "Flask", "NLP"],
    live: "https://ai-personalized-learning.vercel.app/",
    github: "https://github.com/rajverma04/AI_Personalized_Learning",
  },
  {
    title: "Distributed File System",
    date: "APR 25",
    img: images.files,
    description:
      "A distributed file system for efficient storage and access using Flask, C++, and networking concepts.",
    tech: ["Flask", "C++", "Networking"],
    live: "https://file-recovery-system.vercel.app/",
    github: "https://github.com/rajverma04/Distribute-File-System",
  },
];
export default function Projects() {
  const [expanded, setExpanded] = useState({});
  return (
    <section id="projects" className="clay-section">
      <div className="clay-shell">
        <div className="section-head">
          <div>
            <span className="clay-kicker">03 / selected work</span>
            <h2 className="clay-title">
              Built with
              <br />
              <span className="text-[#ff7657]">curiosity.</span>
            </h2>
          </div>
          <p className="clay-copy">
            A few experiments, products, and systems that show how I think and
            build.
          </p>
        </div>
        <div className="clay-grid-2">
          {projects.map((project, index) => {
            const open = expanded[index];
            return (
              <motion.article
                key={project.title}
                className="project-card clay-card clay-panel"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <img
                  className="project-image"
                  src={project.img}
                  alt={project.title}
                />
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="clay-kicker">{project.date}</span>
                </div>
                <p className="project-description clay-copy text-sm">
                  {open
                    ? project.description
                    : project.description.slice(0, 140) + "…"}{" "}
                  {project.description.length > 140 && (
                    <button
                      className="text-[#db5c40] font-bold text-xs"
                      onClick={() =>
                        setExpanded({ ...expanded, [index]: !open })
                      }
                    >
                      {open ? "less" : "more"}
                    </button>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span className="clay-tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.github && (
                    <a
                      className="clay-button clay-button-secondary"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub /> Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      className="clay-button"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
