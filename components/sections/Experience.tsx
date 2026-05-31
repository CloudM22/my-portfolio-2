"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "ThinkThroo",
    role: "Frontend Developer",
    duration: "2023 - Present",
    location: "Remote",
    description:
      "Worked on frontend updates, dialogs, and maintaining UI components. Implemented modern user interfaces using React.js, TypeScript, and Next.js.",
    highlights: [
      "Developed interactive UI components and dialogs",
      "Implemented responsive frontend pages",
      "Maintained and optimized existing UI components",
      "Utilized VS Code Copilot for task understanding and code generation",
      "Conducted testing and debugging of frontend features",
      "Collaborated with team members in agile environment",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.3 }}
              className="relative"
            >
              <div className="relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500" />

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-semibold text-cyan-400 mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 items-center text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-400 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                        <span className="text-slate-400">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/30 to-teal-500/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-950 rounded-xl border border-slate-800">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <span className="text-slate-400">
              <span className="font-semibold text-white">1.5 years</span> of
              professional experience
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
