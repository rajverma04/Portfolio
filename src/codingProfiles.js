import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
const profiles = [
    ["Codolio", "650+ solved", "https://codolio.com/profile/rajverma04"],
    ["LeetCode", "400+ solved", "https://leetcode.com/u/rajverma04/"],
    [
        "GeeksforGeeks",
        "Institute rank 4891",
        "https://auth.geeksforgeeks.org/user/rajverma04/practice/",
    ],
    [
        "Codeforces",
        "Competitive programming",
        "https://codeforces.com/profile/rajverma04",
    ],
    ["HackerRank", "5 star gold badge", "https://www.hackerrank.com/rajverma04"],
];
export default function CodingProfiles() {
    return (
        <section id="coding" className="clay-section">
            <div className="clay-shell">
                <div className="section-head">
                    <div>
                        <span className="clay-kicker">06 / playgrounds</span>
                        <h2 className="clay-title">
                            Where I<br />
                            <span className="text-[#ff7657]">practice.</span>
                        </h2>
                    </div>
                    <p className="clay-copy">
                        Consistency beats intensity. Here’s where I sharpen the
                        problem-solving muscle.
                    </p>
                </div>
                <div className="clay-grid-3">
                    {profiles.map(([name, desc, link], i) => (
                        <motion.a
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            key={name}
                            className="profile-card clay-panel"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <div className="profile-icon">
                                <FaCode />
                            </div>
                            <div>
                                <h3>{name}</h3>
                                <p>{desc}</p>
                            </div>
                            <FaExternalLinkAlt className="ml-auto text-[#db5c40] text-xs" />
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
