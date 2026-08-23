import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
const items = [
  {
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL",
    date: "OCT 25",
    img: new URL("./image/privacy.jpg", import.meta.url).href,
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs117/Course/NPTEL25CS117S145870241810758329.pdf",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "APR 25",
    img: new URL("./image/cloud.jpg", import.meta.url).href,
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S153730233404247365.pdf",
  },
  {
    title: "Coding Ninjas Premier League",
    issuer: "Coding Ninjas",
    date: "MAY 24",
    img: new URL("./image/codingninjas.jpg", import.meta.url).href,
    link: "https://ninjasfiles.s3.amazonaws.com/event_certi_image3924276e95e39f6c7f05eaf56e1248069d2109.jpg",
  },
];
export default function Certificates() {
  return (
    <section id="certificates" className="clay-section">
      <div className="clay-shell">
        <div className="section-head">
          <div>
            <span className="clay-kicker">05 / learning</span>
            <h2 className="clay-title">
              Proof of
              <br />
              <span className="text-[#ff7657]">practice.</span>
            </h2>
          </div>
          <p className="clay-copy">
            Courses and challenges that became part of the toolkit.
          </p>
        </div>
        <div className="clay-grid-3">
          {items.map((item, i) => (
            <motion.article
              className="cert-card clay-card clay-panel"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex justify-between gap-3">
                <h3>{item.title}</h3>
                <span className="clay-kicker">{item.date}</span>
              </div>
              <p className="clay-copy text-sm mt-2">Issued by {item.issuer}</p>
              <img src={item.img} alt={item.title} />
              <a
                className="clay-button clay-button-secondary w-full text-sm"
                href={item.link}
                target="_blank"
                rel="noreferrer"
              >
                Verify <FaExternalLinkAlt />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
