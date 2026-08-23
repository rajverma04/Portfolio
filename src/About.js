import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Body from "./body";
import RotatingText from "../RotatingText/RotatingText";
import { MdAlternateEmail } from "react-icons/md";

const resumePdf = new URL("../public/RAJ_CV.pdf", import.meta.url).href;

export default function About() {
  return (
    <section id="about" className="hero-clay clay-section">
      <div className="clay-shell">
        <div className="hero-grid">
          <motion.div
            className="hero-copy-card clay-panel"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="clay-kicker">01 / welcome</span>
            <span className="clay-tag availability-tag hero-availability">Available for work</span>
            <h1 className="clay-title">
              Hello, I’m
              <br />
              <span>Raj Verma.</span>
            </h1>
            <div className="hero-role">
              I build{" "}
              <strong>
                <RotatingText
                  texts={[
                    "full-stack products",
                    "real-time systems",
                    "friendly interfaces",
                  ]}
                  rotationInterval={2200}
                />
              </strong>
            </div>
            <p className="clay-copy max-w-xl">
              Full Stack Developer specializing in scalable web applications,
              real-time systems, and secure APIs. I enjoy turning complex
              problems into clear, useful experiences.
            </p>
            <div className="hero-actions">
              <a
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                className="clay-button"
              >
                View resume <FontAwesomeIcon icon={faArrowRight} />
              </a>
              <a
                href="mailto:rajkumargrd56@gmail.com"
                className="clay-button clay-button-secondary"
              >
                <MdAlternateEmail /> Say hello
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/rajverma04"
                target="_blank"
                rel="noreferrer"
                className="clay-tag"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rajverma04/"
                target="_blank"
                rel="noreferrer"
                className="clay-tag"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.div
            className="hero-side hero-visual-panel clay-panel"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="hero-avatar-card">
              <div className="hero-code-window" aria-hidden="true">
                <span className="hero-code-tag">SOLVING 2SUM</span>
                <span className="hero-code-line" style={{ "--line": 0 }}>vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; a, int target) {'{'}</span>
                <span className="hero-code-line" style={{ "--line": 1 }}>  unordered_map&lt;int, int&gt; seen;</span>
                <span className="hero-code-line" style={{ "--line": 2 }}>  for (int i = 0; i &lt; a.size(); i++) {'{'}</span>
                <span className="hero-code-line" style={{ "--line": 3 }}>    int need = target - a[i];</span>
                <span className="hero-code-line" style={{ "--line": 4 }}>    if (seen.count(need))</span>
                <span className="hero-code-line" style={{ "--line": 5 }}>      return {'{'}seen[need], i{'}'};</span>
                <span className="hero-code-line" style={{ "--line": 6 }}>    seen[a[i]] = i;</span>
                <span className="hero-code-line" style={{ "--line": 7 }}>  {'}'}</span>
                <span className="hero-code-line" style={{ "--line": 8 }}>  return {'{'}-1, -1{'}'};</span>
                <span className="hero-code-line" style={{ "--line": 9 }}>{'}'}</span>
              </div>
              <Body />
              <span className="hero-sticker">OPEN TO BUILD</span>
            </div>
            <div className="hero-stats">
              <div className="hero-stat clay-panel">
                <strong>10+</strong>
                <span>PROJECTS</span>
              </div>
              <div className="hero-stat clay-panel">
                <strong>650+</strong>
                <span>DSA PROBLEMS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
