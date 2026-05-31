"use client";

import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 inline-block"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold text-cyan-400">K</span>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
              Karthikeya Masapuram
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-300">
              Frontend Developer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10"
          >
            Frontend Developer with 1.5 years of experience building responsive and
            user-friendly web applications using{" "}
            <span className="text-cyan-400 font-medium">React.js</span>,{" "}
            <span className="text-teal-400 font-medium">TypeScript</span>, and{" "}
            <span className="text-emerald-400 font-medium">Next.js</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2"
            >
              <FolderOpen className="w-5 h-5" />
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="group px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 hover:bg-cyan-400/10"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="w-8 h-8 text-slate-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
