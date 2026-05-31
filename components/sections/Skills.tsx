"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "HTML5", level: 95, color: "from-orange-500 to-red-500" },
  { name: "CSS3", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 90, color: "from-yellow-500 to-amber-500" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-700" },
  { name: "React.js", level: 90, color: "from-cyan-400 to-teal-500" },
  { name: "Next.js", level: 85, color: "from-gray-700 to-gray-900" },
  { name: "Tailwind CSS", level: 90, color: "from-teal-400 to-cyan-500" },
  { name: "Git & GitHub", level: 85, color: "from-orange-500 to-red-600" },
  { name: "VS Code Copilot", level: 80, color: "from-purple-500 to-pink-500" },
  { name: "Responsive Design", level: 90, color: "from-emerald-400 to-teal-500" },
  { name: "Testing & Debugging", level: 80, color: "from-green-500 to-emerald-500" },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-teal-500 to-emerald-500 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <h3 className="font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </h3>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
              <div className="mt-2 text-sm text-slate-500">{skill.level}%</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-400">
            Always learning and exploring new technologies to stay updated with the
            latest trends in frontend development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
