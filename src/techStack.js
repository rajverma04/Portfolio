import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaCss3Alt,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiPostgresql,
  SiRedis,
  SiPrisma,
  SiSocketdotio,
  SiJsonwebtokens,
  SiAuth0,
  SiApachekafka,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiWebpack,
  SiBabel,
  SiVite,
  SiKubernetes,
  SiFigma,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiPostman,
  SiCplusplus,
  SiJenkins,
} from "react-icons/si";

import { VscVscodeInsiders } from "react-icons/vsc";
import { PiFigmaLogoFill } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";


const categories = [
  {
    title: "Frontend",
    icon: "🎨",
    tech: [
      { node: <FaReact className="text-5xl text-[#61DAFB]" />, title: "React.js" },
      { node: <SiTypescript className="text-5xl text-[#3178C6]" />, title: "TypeScript" },
      { node: <FaJs className="text-5xl text-[#F7DF1E]" />, title: "JavaScript" },
      { node: <SiRedux className="text-5xl text-[#764ABC]" />, title: "Redux Toolkit" },
      { node: <SiReactrouter className="text-5xl text-[#CA4245]" />, title: "React Router" },
      { node: <SiTailwindcss className="text-5xl text-[#38BDF8]" />, title: "Tailwind CSS" },
      { node: <FaHtml5 className="text-5xl text-[#E34F26]" />, title: "HTML5" },
      { node: <FaCss3Alt className="text-5xl text-[#1572B6]" />, title: "CSS3" },
    ],
  },

  {
    title: "Backend",
    icon: "⚙️",
    tech: [
      { node: <FaNodeJs className="text-5xl text-[#3C873A]" />, title: "Node.js" },
      { node: <SiExpress className="text-5xl text-gray-300" />, title: "Express.js" },
      { node: <SiSocketdotio className="text-5xl text-white" />, title: "WebSockets" },
      { node: <SiJsonwebtokens className="text-5xl text-[#D63AFF]" />, title: "JWT" },
      { node: <SiAuth0 className="text-5xl text-[#EB5424]" />, title: "OAuth 2.0" },
      { node: <SiApachekafka className="text-5xl text-white" />, title: "Kafka" },
    ],
  },

  {
    title: "Databases",
    icon: "🗄️",
    tech: [
      { node: <SiMongodb className="text-5xl text-[#47A248]" />, title: "MongoDB" },
      { node: <SiPostgresql className="text-5xl text-[#4169E1]" />, title: "PostgreSQL" },
      { node: <SiRedis className="text-5xl text-[#DC382D]" />, title: "Redis" },
      { node: <SiPrisma className="text-5xl text-white" />, title: "Prisma" },
    ],
  },

  {
    title: "DevOps & Cloud",
    icon: "☁️",
    tech: [
      { node: <FaDocker className="text-5xl text-[#2496ED]" />, title: "Docker" },
      { node: <SiKubernetes className="text-5xl text-[#326CE5]" />, title: "Kubernetes" },
      { node: <FaAws className="text-5xl text-[#FF9900]" />, title: "AWS" },
      { node: <FaLinux className="text-5xl text-[#FCC624]" />, title: "Linux" },
      { node: <SiGithubactions className="text-5xl text-[#2088FF]" />, title: "GitHub Actions" },
      { node: <SiJenkins className="text-5xl text-[#D24939]" />, title: "Jenkins" },
      { node: <SiVercel className="text-5xl text-white" />, title: "Vercel" },
    ],
  },

  {
    title: "Monitoring",
    icon: "📊",
    tech: [
      { node: <SiPrometheus className="text-5xl text-[#E6522C]" />, title: "Prometheus" },
      { node: <SiGrafana className="text-5xl text-[#F46800]" />, title: "Grafana" },
      { node: <SiGrafana className="text-5xl text-[#00B8D9]" />, title: "Loki" },
    ],
  },

  {
    title: "Tools",
    icon: "🛠️",
    tech: [
      { node: <FaGitAlt className="text-5xl text-[#F05032]" />, title: "Git" },
      { node: <FaGithub className="text-5xl text-white" />, title: "GitHub" },
      { node: <SiPostman className="text-5xl text-[#FF6C37]" />, title: "Postman" },
      { node: <SiVite className="text-5xl text-[#646CFF]" />, title: "Vite" },
      { node: <SiWebpack className="text-5xl text-[#8DD6F9]" />, title: "Webpack" },
      { node: <SiBabel className="text-5xl text-[#F9DC3E]" />, title: "Babel" },
      { node: <VscVscodeInsiders className="text-5xl text-[#007ACC]" />, title: "VS Code" },
      { node: <SiFigma className="text-5xl text-[#A259FF]" />, title: "Figma" },
    ],
  },

  {
    title: "Languages",
    icon: "💻",
    tech: [
      { node: <SiCplusplus className="text-5xl text-[#00599C]" />, title: "C++" },
      { node: <FaPython className="text-5xl text-[#3776AB]" />, title: "Python" },
      { node: <FaJs className="text-5xl text-[#F7DF1E]" />, title: "JavaScript" },
      { node: <SiTypescript className="text-5xl text-[#3178C6]" />, title: "TypeScript" },
      { node: <GrMysql className="text-5xl text-[#00758F]" />, title: "SQL" },
    ],
  },
];

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

const iconVariants = {
  hover: { scale: 1.2, rotate: 5, transition: { type: "spring", stiffness: 300 } },
};

const TechStack = () => {
  return (
    <section id="skills" className="min-h-screen flex py-10 flex-col items-center relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-6 justify-center">
                {category.tech.map((tech, i) => (
                  <motion.div
                    key={i}
                    variants={iconVariants}
                    whileHover="hover"
                    className="flex flex-col items-center gap-2 group/icon"
                  >
                    <div className="relative p-3 rounded-xl bg-black/20 border border-white/5 group-hover/icon:border-white/20 transition-colors">
                      {tech.node}
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover/icon:text-white transition-colors">
                      {tech.title}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;

