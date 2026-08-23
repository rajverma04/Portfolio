import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
const data = [
  [
    "Bachelor of Technology — CSE",
    "Lovely Professional University, Punjab",
    "Aug 2023 — Present",
    "CGPA 7.80",
  ],
  [
    "Higher Secondary Certificate (XII)",
    "B N Saha DAV Public School, Giridih",
    "Apr 2021 — Feb 2022",
    "83%",
  ],
  [
    "Secondary School Certificate (X)",
    "B N Saha DAV Public School, Giridih",
    "Apr 2019 — Feb 2020",
    "82%",
  ],
];
export default function Education() {
  return (
    <section id="education" className="clay-section">
      <div className="clay-shell">
        <div className="section-head">
          <div>
            <span className="clay-kicker">07 / the journey</span>
            <h2 className="clay-title">
              Still
              <br />
              <span className="text-[#ff7657]">becoming.</span>
            </h2>
          </div>
          <p className="clay-copy">
            The places and seasons that shaped how I learn.
          </p>
        </div>
        <div className="timeline">
          {data.map(([title, institution, date, grade], i) => (
            <motion.article
              key={title}
              className="education-card clay-panel"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="edu-mark">
                <FaGraduationCap />
              </div>
              <div>
                <h3>{title}</h3>
                <p className="clay-copy text-sm mt-2">{institution}</p>
              </div>
              <div className="edu-date">
                <div>{i === 0 ? <>Aug 2023 — <span className="present-word">Present</span></> : date}</div>
                <span className="clay-tag mt-3 grade-pill">{grade}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
