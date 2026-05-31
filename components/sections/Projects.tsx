"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ThinkThroo Platform",
    description:
      "Worked on UI updates and frontend pages using React.js, TypeScript, and Next.js. Implemented interactive dialogs and modals for enhanced user experience.",
    technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    title: "Invoice App",
    description:
      "Built invoice features using React.js and TypeScript. Created complete invoice management system with PDF generation and email integration.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-700 transition-all duration-300">
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
                />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-slate-300 rounded-lg font-medium text-sm hover:bg-slate-700 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
