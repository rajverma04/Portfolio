import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="loader-clay fixed inset-0 z-[9999] grid place-items-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.55 }}
    >
      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          className="loader-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="loader-orb grid place-items-center"
          initial={{ scale: 0.6, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
        >
          <span className="text-3xl font-black text-white tracking-[-.12em]">
            RV
          </span>
        </motion.div>
        <div className="text-center">
          <p className="clay-kicker">Raj Verma / portfolio</p>
          <p className="mt-3 text-sm opacity-60">
            shaping ideas into interfaces...
          </p>
        </div>
        <motion.div
          className="clay-panel-inset h-2 w-48 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full rounded-full bg-[#ff7657]"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
