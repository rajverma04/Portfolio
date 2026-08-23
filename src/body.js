import { motion } from "framer-motion";

const profileImage = new URL("./image/hero-developer.png", import.meta.url)
  .href;

export default function Body() {
  return (
    <motion.div
      className="hero-avatar"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={profileImage}
        alt="3D developer character working on a laptop"
      />
      <span className="avatar-typing" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="avatar-hover-message" aria-hidden="true">
        <strong>DO NOT DISTURB</strong>
        <small>coding in progress</small>
      </span>
    </motion.div>
  );
}
