import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

interface EducationItem {
  degree: string;
  school: string;
  location: string;
  year: string;
  description: string;
  tags: string[];
}

const Education: React.FC = () => {
  const education: EducationItem[] = [
    {
      degree: "Bachelor of Computer Science and Informatics",
      school: "Zagazig University",
      location: "Zagazig, Egypt",
      year: "2020 – 2024",
      description: "Specialized in Software Engineering and Programming. Studied core CS fundamentals including data structures, algorithms, databases, software design patterns, and operating systems.",
      tags: ["Data Structures", "Algorithms", "Databases", "OOP", "Software Engineering"],
    },
  ];

  return (
    <section id="education" className="relative py-20 sm:py-28 bg-white dark:bg-[#08090e] overflow-hidden">

      {/* ── Grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px,transparent 1px),linear-gradient(to right,#94a3b8 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glow ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-blue-400/5 dark:bg-blue-600/7 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-500/60" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-blue-500 dark:text-blue-400">
              Academic Background
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
            Education
          </h2>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="max-w-4xl">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10"
            >
              {/* ── Left: meta column ── */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 lg:gap-4 lg:pt-1">
                {/* Year badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg
                                bg-blue-500/10 border border-blue-500/20 self-start">
                  <CalendarDays className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide whitespace-nowrap">
                    {item.year}
                  </span>
                </div>

                {/* Location */}
                <div className="inline-flex items-center gap-1.5 self-start">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span className="text-xs text-slate-400 dark:text-slate-500">{item.location}</span>
                </div>
              </div>

              {/* ── Vertical timeline line (desktop) ── */}
              <div className="hidden lg:flex lg:col-span-1 flex-col items-center gap-0 pt-1">
                {/* Icon node */}
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center
                                shadow-lg shadow-blue-600/30 flex-shrink-0 z-10">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                {/* Line below (only if more items) */}
                {index < education.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-blue-500/40 to-transparent mt-2" />
                )}
              </div>

              {/* ── Right: card ── */}
              <div className="lg:col-span-8">
                <div className="group relative p-6 sm:p-8 rounded-2xl
                                bg-slate-50 dark:bg-white/[0.03]
                                border border-slate-200/80 dark:border-white/[0.07]
                                hover:border-blue-400/40 dark:hover:border-blue-400/20
                                shadow-sm hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/20
                                transition-all duration-500 overflow-hidden">

                  {/* Ghost icon */}
                  <GraduationCap
                    aria-hidden
                    className="absolute -right-4 -bottom-4 w-32 h-32
                               text-slate-900/[0.03] dark:text-white/[0.03]
                               pointer-events-none select-none"
                  />

                  {/* Mobile icon */}
                  <div className="flex items-start gap-3 mb-4 lg:hidden">
                    <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center
                                    shadow-md shadow-blue-600/30 flex-shrink-0">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Degree */}
                  <h3 className="text-lg sm:text-xl font-extrabold tracking-tight
                                 text-slate-900 dark:text-white mb-1 leading-snug">
                    {item.degree}
                  </h3>

                  {/* School */}
                  <p className="text-blue-500 dark:text-blue-400 font-semibold text-sm mb-3">
                    {item.school}
                  </p>

                  {/* Divider */}
                  <div className="h-px w-10 bg-blue-500/30 mb-4 rounded-full" />

                  {/* Description */}
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-lg
                                   bg-slate-100 dark:bg-white/[0.05]
                                   text-slate-500 dark:text-slate-400
                                   border border-slate-200 dark:border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;