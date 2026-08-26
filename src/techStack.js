import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode,
  FaServer,
  FaRoute,
  FaLink,
  FaExchangeAlt,
  FaShieldAlt,
  FaCogs,
  FaBolt,
  FaLock,
  FaBug,
  FaProjectDiagram,
  FaNetworkWired,
  FaSitemap,
  FaObjectGroup,
  FaMicrochip,
  FaChartLine,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiFigma,
  SiPostman,
  SiVite,
  SiCplusplus,
  SiPython,
  SiSocketdotio,
  SiJsonwebtokens,
  SiBootstrap,
  SiReactrouter,
  SiPrisma,
  SiApachekafka,
  SiPrometheus,
  SiGrafana,
  SiJenkins,
  SiGithubactions,
  SiVercel,
  SiLinux,
  SiAxios,
  SiZod,
} from "react-icons/si";

const groups = [
  {
    title: "Languages & Core CS",
    description:
      "Programming languages and computer science fundamentals behind practical software engineering.",
    icon: "⌬",
    items: [
      ["C++", <SiCplusplus color="#00599C" />],
      ["JavaScript", <FaJs color="#F7DF1E" />],
      ["TypeScript", <SiTypescript color="#3178C6" />],
      ["SQL", <FaDatabase color="#4479A1" />],
      ["Python", <SiPython color="#3776AB" />],
      ["Data Structures & Algorithms", <FaProjectDiagram color="#61DAFB" />],
      ["OOP", <FaObjectGroup color="#FFB74D" />],
      ["DBMS", <FaDatabase color="#4479A1" />],
      ["Operating Systems", <FaMicrochip color="#78909C" />],
      ["Computer Networks", <FaNetworkWired color="#4CAF50" />],
      ["System Design", <FaSitemap color="#D63AFF" />],
    ],
  },

  {
    title: "Frontend",
    description:
      "Modern interfaces focused on performance, responsiveness, and user experience.",
    icon: "⌁",
    items: [
      ["React.js", <FaReact color="#61DAFB" />],
      ["Redux Toolkit", <SiRedux color="#764ABC" />],
      ["React Router", <SiReactrouter color="#CA4245" />],
      ["Tailwind CSS", <SiTailwindcss color="#38BDF8" />],
      ["Bootstrap", <SiBootstrap color="#7952B3" />],
      ["HTML5", <FaHtml5 color="#E34F26" />],
      ["CSS3", <FaCss3Alt color="#1572B6" />],
    ],
  },

  {
    title: "Backend & APIs",
    description:
      "Backend services, APIs, authentication, and reliable application architecture.",
    icon: "⌘",
    items: [
      ["Node.js", <FaNodeJs color="#68A063" />],
      ["Express.js", <SiExpress />],
      ["REST API Development", <FaServer color="#61DAFB" />],
      ["WebSockets", <SiSocketdotio />],
      ["JWT", <SiJsonwebtokens color="#D63AFF" />],
      ["OAuth 2.0", <FaShieldAlt color="#4CAF50" />],
      ["Authentication", <FaShieldAlt color="#4CAF50" />],
      ["Zod", <SiZod color="#3E67B1" />],
      ["Third-Party API Integration", <FaExchangeAlt color="#FFB74D" />],
    ],
  },

  {
    title: "Databases & Data",
    description:
      "Data storage, ORM tools, caching, and efficient data access patterns.",
    icon: "◒",
    items: [
      ["PostgreSQL", <SiPostgresql color="#4169E1" />],
      ["MySQL", <SiMysql color="#4479A1" />],
      ["MongoDB", <SiMongodb color="#47A248" />],
      ["Redis", <SiRedis color="#DC382D" />],
      ["Prisma", <SiPrisma color="#2D3748" />],
      ["Caching", <FaBolt color="#F7C948" />],
    ],
  },

  {
    title: "Cloud, DevOps & Observability",
    description:
      "Infrastructure, deployment automation, monitoring, logging, and distributed systems.",
    icon: "◇",
    items: [
      ["AWS (EC2, S3)", <FaAws color="#FF9900" />],
      ["Docker", <FaDocker color="#2496ED" />],
      ["Kubernetes", <SiKubernetes color="#326CE5" />],
      ["Jenkins", <SiJenkins color="#D24939" />],
      ["GitHub Actions", <SiGithubactions />],
      ["CI/CD", <FaCogs color="#78909C" />],
      ["Linux", <SiLinux />],
      ["Vercel", <SiVercel />],
      ["Apache Kafka", <SiApachekafka color="#231F20" />],
      ["Prometheus", <SiPrometheus color="#E6522C" />],
      ["Grafana", <SiGrafana color="#F46800" />],
      ["Loki", <FaChartLine color="#F46800" />],
    ],
  },

  {
    title: "Developer Tools",
    description: "Tools used for development, testing, collaboration, and design.",
    icon: "⌂",
    items: [
      ["Git", <FaGitAlt color="#F05032" />],
      ["GitHub", <FaGithub />],
      ["Postman", <SiPostman color="#FF6C37" />],
      ["Axios", <SiAxios color="#5A29E4" />],
      ["Vite", <SiVite color="#646CFF" />],
      ["Figma", <SiFigma color="#A259FF" />],
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="clay-section">
      <div className="clay-shell">
        <div className="section-head">
          <div>
            <span className="clay-kicker">02 / toolkit</span>
            <h2 className="clay-title">
              The tools
              <br />
              behind the <span className="text-[#ff7657]">work.</span>
            </h2>
          </div>
          <p className="clay-copy">
            Not just a list of names—these are the tools I reach for when
            turning a rough idea into a reliable product.
          </p>
        </div>
        <div className="skills-board clay-panel">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              className="skills-board-row clay-panel"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="skills-category">
                <div className="skill-icon">{group.icon}</div>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>
              <div className="skills-icon-grid">
                {group.items.map(([name, icon]) => (
                  <div className="skill-tile clay-panel-inset" key={name}>
                    <span className="skill-tile-icon">{icon}</span>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
