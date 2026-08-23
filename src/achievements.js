import { motion } from "framer-motion";
import { FaTrophy, FaExternalLinkAlt } from "react-icons/fa";
const data = [
  [
    "LeetCode Contest Rating",
    "Peak contest rating of 1653 on LeetCode.",
    "FEB 26",
    "https://leetcode.com/u/rajverma04",
  ],
  [
    "DSA Problem Solving",
    "Solved 650+ problems across LeetCode and GeeksforGeeks.",
    "JAN 26",
    "https://codolio.com/profile/rajverma04",
  ],
  [
    "Coding Ninjas Premier League",
    "Secured AIR-7 in the coding competition.",
    "MAY 24",
    "https://ninjasfiles.s3.amazonaws.com/event_certi_image3924276e95e39f6c7f05eaf56e1248069d2109.jpg",
  ],
];
export default function Achievements() {
  return (
    <section id="achievements" className="clay-section">
      <div className="clay-shell">
        <div className="section-head">
          <div>
            <span className="clay-kicker">04 / milestones</span>
            <h2 className="clay-title">
              Small wins,
              <br />
              <span className="text-[#ff7657]">big energy.</span>
            </h2>
          </div>
          <p className="clay-copy">
            The numbers and moments that keep me learning.
          </p>
        </div>
        <div className="clay-grid-3">
          {data.map(([title, desc, date, link], i) => (
            <motion.a
              href={link}
              target="_blank"
              rel="noreferrer"
              key={title}
              className="clay-card clay-panel block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex justify-between items-start">
                <div className="profile-icon">
                  <FaTrophy />
                </div>
                <span className="clay-kicker">{date}</span>
              </div>
              <h3 className="mt-7">{title}</h3>
              <p className="clay-copy text-sm mt-3">{desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#db5c40]">
                View proof <FaExternalLinkAlt />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
