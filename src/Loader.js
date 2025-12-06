import React from "react";
import { motion } from "framer-motion";
import CanvasLoader from "./CanvasLoader";

export default function Loader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-60">
                <CanvasLoader />
            </div>

            <div className="relative z-10 flex flex-col items-center pointer-events-none">
                {/* Pulsing Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                    <h1 className="relative text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-[Audiowide] drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                        RV
                    </h1>
                </motion.div>

                {/* Loading Bar */}
                <motion.div
                    className="w-64 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-4 text-gray-400 text-xs tracking-[0.3em] uppercase font-medium"
                >
                    Initializing Core...
                </motion.p>
            </div>
        </motion.div>
    );
}
