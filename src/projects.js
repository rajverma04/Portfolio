import { motion } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const codeNexusImg = new URL("./image/codenexus.jpg", import.meta.url).href;
const gstinvoice = new URL("./image/gstinvoice.jpg", import.meta.url).href;
const taksyImg = new URL("./image/taksyImg.jpg", import.meta.url).href;
const ailearning = new URL("./image/ailearning.jpg", import.meta.url).href;
const filedistribution = new URL("./image/filedistribution.jpg", import.meta.url).href;
const gstImg = new URL("./image/gstImg.jpg", import.meta.url).href;

const DESCRIPTION_LIMIT = 120;

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (i) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  const projects = [
    {
      title: "GST Invoice Generator App",
      img: gstImg,
      description:
        "Developed a cross-platform GST billing application using React Native and Expo for generating and managing GST-compliant invoices. Built reusable invoice forms with real-time CGST, SGST, and IGST calculations using GSTIN-based state code parsing. Implemented PDF invoice generation, preview, and sharing functionality with Expo Print and Sharing APIs. Designed a scalable component-based architecture with TypeScript, Expo Router, and React Hooks while integrating REST APIs with Axios for seamless data handling, validation, and error management.",
      tech: [
        "React Native",
        "Expo",
        "TypeScript",
        "Expo Router",
        "React Hooks",
        "Axios",
        "WebView",
        "Expo Print",
        "Expo Sharing"
      ],
      liveLink: "https://drive.google.com/file/d/1emlNw-iFRW1qSLyqL58qaDPP_DqMNCzX/view",
      githubLink: "https://github.com/rajverma04/gstinvoice-app",
      date: "Jul - Aug 26",
    },
    {
      title: "Taksy",
      img: taksyImg,
      description:
        "Developed a real-time chat application using WebSocket technology enabling instant messaging and seamless file sharing between devices on the same local network. Implemented end-to-end encryption to ensure secure and private communication, preventing unauthorized access during transmission. Designed a scalable room-based chat architecture allowing users to create, join, and manage both public and private chat rooms efficiently. Enhanced user interaction by adding advanced messaging features such as message reactions and dynamic message updates including edit and delete functionality.",
      tech: [
        "MERN Stack",
        "WebSocket",
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Lucide-React",
        "Multer",
        "End-to-End Encryption"
      ],
      liveLink: "https://chat-appdev.vercel.app/",
      githubLink: "https://github.com/rajverma04/ChatApp",
      date: "Jan - Feb 26",
    },
    {
      title: "CodeNexus",
      img: codeNexusImg,
      description:
        "Developed a scalable MERN-based coding platform supporting multiple programming languages with real-time code execution via Judge0 API. Built an AI-powered debugging assistant using Google Gemini API to analyze runtime/compiler errors and provide contextual fix suggestions. Integrated Redis caching to optimize API and database performance and Monaco Editor for a VS Code–like coding experience with syntax highlighting and auto-completion. Implemented secure JWT authentication with OTP email verification, containerized the application using Docker, published production-ready images to Docker Hub, and optimized performance and technical SEO, achieving Lighthouse scores of 100 in Performance and SEO.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "Docker",
        "Docker Hub",
        "Monaco Editor",
        "Judge0 API",
        "Google Gemini API",
        "JWT Authentication",
        "Cloudinary",
        "Tailwind CSS"
      ],
      liveLink: "https://codenexusdev.vercel.app/",
      githubLink: "https://github.com/rajverma04/CodeNexus",
      date: "Nov - Dec 25",
    },
    {
      title: "GST-INVOICE GENERATOR",
      img: gstinvoice,
      description:
        "Developed a responsive GST billing application that enables users to generate GST-compliant invoices with automated CGST, SGST, and IGST calculations. Implemented dynamic item management with real-time invoice creation and auto-calculated totals. Integrated MongoDB for storing shop details and transport IDs with an optimized schema for efficient retrieval. Utilized html2canvas to convert the invoice UI into images and jsPDF to generate and download compressed PDF invoices seamlessly.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Bootstrap",
        "html2canvas",
        "jsPDF"
      ],
      liveLink: "https://gstinvoice.vercel.app",
      githubLink: "https://github.com/rajverma04/gstinvoice",
      date: "Jul - Aug 25",
    },
    {
      title: "AI CHATBOT",
      img: ailearning,
      description:
        "A personalized AI-powered chatbot designed to assist students with learning and Q&A. Focused on user experience and intelligent interactions.",
      tech: ["Python", "Flask", "NLP"],
      liveLink: "https://ai-personalized-learning.vercel.app/",
      githubLink: "https://github.com/rajverma04/AI_Personalized_Learning",
      date: "Apr 25",
    },
    {
      title: "File Distributed System",
      img: filedistribution,
      description:
        "Developed a distributed file system for efficient file storage and access using Flask and C++. Focused on backend architecture and scalability.",
      tech: ["Flask", "C++", "Networking"],
      liveLink: "https://file-recovery-system.vercel.app/",
      githubLink: "https://github.com/rajverma04/Distribute-File-System",
      date: "Apr 25",
    },
  ];

  const openInNewTab = (url) => {
    if (!url || url === "#") {
      return;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex py-10 flex-col items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl w-full px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
            💻 My Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects demonstrating full-stack development, API
            integrations, and practical system design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => {
            const isLive = project.liveLink && project.liveLink !== "#";
            const hasGithub = project.githubLink && project.githubLink !== "#";

            return (
              <motion.article
                key={i}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors duration-300 flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    {project.date}
                  </span>
                </div>

                {/* Image */}
                {project.img && (
                  <div className="mb-4">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full aspect-video rounded-2xl object-cover object-top border border-white/10"
                    />
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description.length > DESCRIPTION_LIMIT && !expanded[i]
                      ? project.description.slice(0, DESCRIPTION_LIMIT) + "…"
                      : project.description}
                  </p>
                  {project.description.length > DESCRIPTION_LIMIT && (
                    <button
                      onClick={() => toggleExpand(i)}
                      className="mt-1 text-indigo-400 text-xs font-semibold hover:text-indigo-300 transition-colors"
                    >
                      {expanded[i] ? "See less ▲" : "See more ▼"}
                    </button>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 mt-auto">
                  {/* GitHub Source */}
                  <button
                    onClick={() => hasGithub && openInNewTab(project.githubLink)}
                    disabled={!hasGithub}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${hasGithub
                      ? "bg-white/10 text-white hover:bg-white/20 hover:scale-[1.02] cursor-pointer border border-white/10"
                      : "bg-white/5 text-gray-500 cursor-not-allowed border border-white/5"
                      }`}
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>Source</span>
                  </button>

                  {/* Live Demo */}
                  <button
                    onClick={() => isLive && openInNewTab(project.liveLink)}
                    disabled={!isLive}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${isLive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] cursor-pointer"
                      : "bg-white/5 text-gray-500 cursor-not-allowed border border-white/5"
                      }`}
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;