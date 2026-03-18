import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

// images
const privacy = new URL("./image/privacy.jpg", import.meta.url).href;
const cloud = new URL("./image/cloud.jpg", import.meta.url).href;
const codingNinjas = new URL("./image/codingninjas.jpg", import.meta.url).href;

const Certificates = () => {
    const certificates = [
        {
            title: "Privacy and Security in Online Social Media",
            issuer: "NPTEL",
            img: privacy,
            verifyLink: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs117/Course/NPTEL25CS117S145870241810758329.pdf", // replace with actual
            date: "Oct 25",
        },
        {
            title: "Cloud Computing",
            issuer: "NPTEL",
            img: cloud,
            verifyLink: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S153730233404247365.pdf",
            date: "Apr 25",
        },
        {
            title: "Coding Ninjas Premier League",
            issuer: "Coding Ninjas",
            img: codingNinjas,
            verifyLink: "https://ninjasfiles.s3.amazonaws.com/event_certi_image3924276e95e39f6c7f05eaf56e1248069d2109.jpg",
            date: "May 24",
        },
    ];

    const openInNewTab = (url) => {
        if (!url || url === "#") return;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section
            id="certificates"
            className="min-h-screen flex py-10 flex-col items-center relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl w-full px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        🎓 Certificates
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Verified certifications showcasing my learning in cloud, security,
                        and competitive coding.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {certificates.map((cert, i) => (
                        <motion.article
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition duration-300"
                        >
                            {/* Title + Date */}
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400">
                                    {cert.title}
                                </h3>
                                <span className="text-xs text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full">
                                    {cert.date}
                                </span>
                            </div>

                            {/* Issuer */}
                            <p className="text-sm text-gray-400 mb-4">
                                Issued by <span className="text-indigo-300">{cert.issuer}</span>
                            </p>

                            {/* Image */}
                            {cert.img && (
                                <div className="mb-6 overflow-hidden rounded-xl">
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                            )}

                            {/* Button */}
                            <button
                                onClick={() => openInNewTab(cert.verifyLink)}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:scale-[1.02] transition"
                            >
                                <FaExternalLinkAlt className="w-3 h-3" />
                                Verify Certificate
                            </button>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;