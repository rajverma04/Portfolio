import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
const profiles = [
    { name: "Codolio", desc: "650+ solved", link: "https://codolio.com/profile/rajverma04", logo: "https://png.pngtree.com/png-vector/20240929/ourmid/pngtree-adorable-cartoon-owl-with-glasses-looking-wise-and-thoughtful-perfect-for-png-image_13982365.png" },
    { name: "LeetCode", desc: "400+ solved", link: "https://leetcode.com/u/rajverma04/", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
    { name: "GeeksforGeeks", desc: "Institute rank 4891", link: "https://auth.geeksforgeeks.org/user/rajverma04/practice/", logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/GeeksForGeeks_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
    { name: "Codeforces", desc: "Competitive programming", link: "https://codeforces.com/profile/rajverma04", logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-svg-download-png-2944796.png" },
    { name: "HackerRank", desc: "5 star gold badge", link: "https://www.hackerrank.com/rajverma04", logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" },
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
                    {profiles.map(({ name, desc, link, logo, icon: Icon }, i) => (
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
                                {logo ? <img src={logo} alt={`${name} logo`} /> : <Icon />}
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
