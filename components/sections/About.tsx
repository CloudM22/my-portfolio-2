"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "UI Updates",
    description: "Building modern and responsive user interfaces",
  },
  {
    icon: Palette,
    title: "Dialogs & Modals",
    description: "Creating interactive UI components",
  },
  {
    icon: Rocket,
    title: "Frontend Pages",
    description: "Developing complete page layouts and flows",
  },
  {
    icon: Users,
    title: "AI-Assisted Development",
    description: "Using VS Code Copilot for task understanding and code generation",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              I&apos;m a passionate Frontend Developer currently working at{" "}
              <span className="text-cyan-400 font-semibold">ThinkThroo</span>, where I
              focus on building responsive and user-friendly web applications.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              With 1.5 years of hands-on experience, I&apos;ve developed expertise in
              modern frontend technologies including{" "}
              <span className="text-cyan-400 font-medium">React.js</span>,{" "}
              <span className="text-teal-400 font-medium">TypeScript</span>, and{" "}
              <span className="text-emerald-400 font-medium">Next.js</span>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 leading-relaxed"
            >
              At ThinkThroo, I&apos;ve been involved in implementing UI updates, creating
              interactive dialogs and modals, and developing complete frontend pages
              that enhance user experience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-4"
            >
              {["React.js", "TypeScript", "Next.js", "Tailwind CSS"].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm font-medium border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 bg-slate-900 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
