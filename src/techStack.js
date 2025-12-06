import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiReactrouter,
  SiTypescript
} from "react-icons/si";

import { VscVscodeInsiders } from "react-icons/vsc";
import { PiFigmaLogoFill } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";


const categories = [
  {
    title: "MERN Stack",
    icon: "🌐",
    tech: [
      { node: <FaReact className="text-5xl text-[#20d9ff]" />, title: "React" },
      { node: <SiExpress className="text-5xl text-gray-300" />, title: "Express.js" },
      { node: <FaNodeJs className="text-5xl text-[#3c873a]" />, title: "Node.js" },
      { node: <SiMongodb className="text-5xl text-[#4db33d]" />, title: "MongoDB" },
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    tech: [
      { node: <FaHtml5 className="text-5xl text-[#f75403]" />, title: "HTML5" },
      { node: <SiTailwindcss className="text-5xl text-[#38BDF8]" />, title: "Tailwind CSS" },
      { node: <SiRedux className="text-5xl text-[#764ABC]" />, title: "Redux" },
      { node: <SiReactrouter className="text-5xl text-[#CA4245]" />, title: "React Router" },
      { node: <SiTypescript className="text-5xl text-[#3178C6]" />, title: "TypeScript" }
    ],
  },

  {
    title: "Languages",
    icon: "💻",
    tech: [
      { node: <FaJs className="text-5xl text-[#f4e11e]" />, title: "JavaScript" },
      { node: <FaPython className="text-5xl text-[#3776AB]" />, title: "Python" },
      { node: <FaJava className="text-5xl text-[#f89820]" />, title: "Java" },
      { node: <FaDatabase className="text-5xl text-[#0c4a86]" />, title: "C" }, // Using Database icon as placeholder for C if FaCuttlefish not found/preferred
    ],
  },
  {
    title: "Backend & DB",
    icon: "🗄️",
    tech: [
      { node: <SiMongodb className="text-5xl text-[#4db33d]" />, title: "MongoDB" },
      { node: <GrMysql className="text-5xl text-[#00758F]" />, title: "MySQL" },
      { node: <SiExpress className="text-5xl text-gray-300" />, title: "Express.js" },
      { node: <FaNodeJs className="text-5xl text-[#3c873a]" />, title: "Node.js" },
    ],
  },

  {
    title: "Tools",
    icon: "🧰",
    tech: [
      { node: <FaGitAlt className="text-5xl text-[#f05032]" />, title: "Git" },
      { node: <FaGithub className="text-5xl text-white" />, title: "GitHub" },
      { node: <VscVscodeInsiders className="text-5xl text-[#3e9dd7]" />, title: "VS Code" },
      { node: <SiPostman className="text-5xl text-[#f75403]" />, title: "Postman" },
      { node: <PiFigmaLogoFill className="text-5xl text-[#8a1bfc]" />, title: "Figma" },
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
    <section id="skills" className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent inline-block">
            My Tech Stack
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

