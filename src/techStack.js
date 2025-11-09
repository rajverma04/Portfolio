import React from "react";
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
  FaBootstrap,
  FaCuttlefish,
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
    title: "🌐 MERN Stack",
    tech: [
      { node: <FaReact className="text-5xl text-[#20d9ff]" />, title: "React" },
      { node: <SiExpress className="text-5xl text-gray-300" />, title: "Express.js" },
      { node: <FaNodeJs className="text-5xl text-[#3c873a]" />, title: "Node.js" },
      { node: <SiMongodb className="text-5xl text-[#4db33d]" />, title: "MongoDB" },
    ],
  },
  {
  title: "🎨 Frontend",
  tech: [
    { node: <FaHtml5 className="text-5xl text-[#f75403]" />, title: "HTML5" },
    // { node: <FaBootstrap className="text-5xl text-[#8a1bfc]" />, title: "Bootstrap" },
    { node: <SiTailwindcss className="text-5xl text-[#38BDF8]" />, title: "Tailwind CSS" },
    { node: <SiRedux className="text-5xl text-[#764ABC]" />, title: "Redux" },
    { node: <SiReactrouter className="text-5xl text-[#CA4245]" />, title: "React Router" },
    { node: <SiTypescript className="text-5xl text-[#3178C6]" />, title: "TypeScript" }
  ],
},

  {
    title: "💻 Programming Languages",
    tech: [
      { node: <FaJs className="text-5xl text-[#f4e11e]" />, title: "JavaScript" },
      { node: <FaPython className="text-5xl text-[#3776AB]" />, title: "Python" },
      { node: <FaJava className="text-5xl text-[#f89820]" />, title: "Java" },
      { node: <FaCuttlefish className="text-5xl text-[#0c4a86]" />, title: "C" },
    ],
  },
  {
  title: "🗄️ Database & Backend Tools",
  tech: [
    { node: <SiMongodb className="text-5xl text-[#4db33d]" />, title: "MongoDB" },
    { node: <GrMysql className="text-5xl text-[#00758F]" />, title: "MySQL" },
    { node: <SiExpress className="text-5xl text-gray-300" />, title: "Express.js" },
    { node: <FaNodeJs className="text-5xl text-[#3c873a]" />, title: "Node.js" },
  ],
  },

  {
    title: "🧰 Tools & Version Control",
    tech: [
      { node: <FaGitAlt className="text-5xl text-[#f05032]" />, title: "Git" },
      { node: <FaGithub className="text-5xl text-white" />, title: "GitHub" },
      { node: <VscVscodeInsiders className="text-5xl text-[#3e9dd7]" />, title: "VS Code" },
      { node: <SiPostman className="text-5xl text-[#f75403]" />, title: "Postman" },
      { node: <PiFigmaLogoFill className="text-5xl text-[#8a1bfc]" />, title: "Figma" },
    ],
  },

];

const TechStack = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-16 px-6 bg-black text-white">
      <h2 className="text-4xl font-semibold mb-12 text-center border-b-2 border-gray-700 pb-4">
        🛠️ My Tech Stack
      </h2>

      {/* Outer Container Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-6xl w-full">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-cyan-400">
              {category.title}
            </h3>

            <ul className="flex flex-wrap justify-center gap-8">
              {category.tech.map((tech, i) => (
                <li
                  key={i}
                  className="flex flex-col items-center transition-transform duration-200 hover:scale-110"
                  title={tech.title}
                >
                  {tech.node}
                  <span className="text-sm text-gray-300 mt-2">{tech.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
