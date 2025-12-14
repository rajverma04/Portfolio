import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Code Nexus",
      description:
        "Built a full-stack coding platform featuring a VS Code–like editor using Monaco and real-time code execution through Judge0. The backend is powered by Node.js and MongoDB to manage users, submissions, and problem data. Supports multiple programming languages with a responsive and smooth user experience.",
      tech: ["React.js", "Node.js", "MongoDB", "Monaco Editor", "Judge0 API", "Tailwind CSS"],
      liveLink: "https://code-nexus-frontend.vercel.app/",
      githubLink: "https://github.com/rajverma04/CodeNexus",
      date: "Nov - Dec 2025",
    },
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
      date: "Jul - Aug 2025",
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
      githubLink: "https://github.com/rajverma04/Distribute-File-System",
      date: "Apr 2025",
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, i) => {
            const isLive = project.liveLink && project.liveLink !== "#";
            const hasGithub = project.githubLink && project.githubLink !== "#";

            return (
              <motion.article
                key={i}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors duration-300 flex flex-col h-full"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    {project.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
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