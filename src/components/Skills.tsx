import React from "react";
import { motion } from "framer-motion";
import {
  Code2, Server, Database, Blocks,
  Braces, Terminal, Container, ChevronsLeftRight,
  GitBranch,
  Github,
  Monitor,
  Cloud,
} from "lucide-react";

/* ── Types ─────────────────────────────────────────────────── */
interface Skill {
  name: string;
  icon: React.ElementType;
  category: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
}

/* ── Category badge colours ─────────────────────────────────── */
const categoryStyle: Record<string, { dot: string; text: string; bg: string; border: string }> = {
  Frontend: { dot: "bg-violet-500", text: "text-violet-500 dark:text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  Backend: { dot: "bg-blue-500", text: "text-blue-500 dark:text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  Language: { dot: "bg-amber-500", text: "text-amber-500 dark:text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  Database: { dot: "bg-cyan-500", text: "text-cyan-500 dark:text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  DevOps: { dot: "bg-emerald-500", text: "text-emerald-500 dark:text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
};

/* ── Stagger ────────────────────────────────────────────────── */
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Skill Card ─────────────────────────────────────────────── */
const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;
  const cat = categoryStyle[skill.category] ?? categoryStyle.Backend;

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
      className="group relative flex flex-col gap-3 p-5 rounded-2xl
                 bg-white dark:bg-white/[0.03]
                 border border-slate-200/80 dark:border-white/[0.07]
                 hover:border-blue-400/35 dark:hover:border-blue-400/20
                 shadow-sm hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/30
                 transition-all duration-400 overflow-hidden cursor-default"
    >
      {/* Ghost icon watermark */}
      <Icon
        aria-hidden
        className="absolute -right-3 -bottom-3 w-20 h-20
                   text-slate-900/[0.03] dark:text-white/[0.035]
                   pointer-events-none select-none"
      />

      {/* Icon */}
      <div
        className={`inline-flex w-10 h-10 rounded-xl items-center justify-center flex-shrink-0
                    ${skill.accentBg} border ${skill.accentBorder}
                    transition-transform duration-300 group-hover:-translate-y-0.5`}
      >
        <Icon className={`w-5 h-5 ${skill.accent}`} />
      </div>

      {/* Name + category */}
      <div>
        <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight mb-2">
          {skill.name}
        </h3>
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold
                      tracking-[0.15em] uppercase ${cat.bg} ${cat.text} border ${cat.border}`}
        >
          <span className={`w-1 h-1 rounded-full ${cat.dot}`} />
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
};

/* ── Section ────────────────────────────────────────────────── */
const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "JavaScript ES6", icon: Code2, category: "Language", accent: "text-amber-500  dark:text-amber-400", accentBg: "bg-amber-500/10", accentBorder: "border-amber-500/20" },
    { name: "TypeScript", icon: Braces, category: "Language", accent: "text-blue-500   dark:text-blue-400", accentBg: "bg-blue-500/10", accentBorder: "border-blue-500/20" },
    { name: "Node.js", icon: Server, category: "Backend", accent: "text-emerald-500 dark:text-emerald-400", accentBg: "bg-emerald-500/10", accentBorder: "border-emerald-500/20" },
    { name: "Express.js", icon: ChevronsLeftRight, category: "Backend", accent: "text-slate-500  dark:text-slate-400", accentBg: "bg-slate-500/10", accentBorder: "border-slate-500/20" },
    { name: "RESTful APIs", icon: Monitor, category: "Backend", accent: "text-slate-500  dark:text-slate-400", accentBg: "bg-slate-500/10", accentBorder: "border-slate-500/20" },
    { name: "MongoDB", icon: Database, category: "Database", accent: "text-green-500  dark:text-green-400", accentBg: "bg-green-500/10", accentBorder: "border-green-500/20" },
    { name: "React", icon: Blocks, category: "Frontend", accent: "text-cyan-500   dark:text-cyan-400", accentBg: "bg-cyan-500/10", accentBorder: "border-cyan-500/20" },
    { name: "TailwindCSS", icon: Terminal, category: "Frontend", accent: "text-violet-500 dark:text-violet-400", accentBg: "bg-violet-500/10", accentBorder: "border-violet-500/20" },
    { name: "Docker", icon: Container, category: "DevOps", accent: "text-blue-400   dark:text-blue-300", accentBg: "bg-blue-400/10", accentBorder: "border-blue-400/20" },
    { name: "Git", icon: GitBranch, category: "DevOps", accent: "text-blue-400   dark:text-blue-300", accentBg: "bg-blue-400/10", accentBorder: "border-blue-400/20" },
    { name: "CI/CD (Github Actions)", icon: Github, category: "DevOps", accent: "text-blue-400   dark:text-blue-300", accentBg: "bg-blue-400/10", accentBorder: "border-blue-400/20" },
    { name: "AWS Fundamentals", icon: Cloud, category: "DevOps", accent: "text-blue-400   dark:text-blue-300", accentBg: "bg-blue-400/10", accentBorder: "border-blue-400/20" },
  ];

  /* unique categories for the legend */
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-slate-50 dark:bg-[#0d0f17] overflow-hidden">

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px,transparent 1px),linear-gradient(to right,#94a3b8 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-1/4 w-[420px] h-[320px] rounded-full bg-violet-400/5 dark:bg-violet-600/8 blur-[110px]" />
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
              Tech Stack
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
              Technical
              <span className="text-blue-500"> Expertise</span>
            </h2>

            {/* Category legend */}
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {categories.map((cat) => {
                const s = categoryStyle[cat] ?? categoryStyle.Backend;
                return (
                  <span
                    key={cat}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg
                                text-[10px] font-bold tracking-[0.15em] uppercase
                                ${s.bg} ${s.text} border ${s.border}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                    {cat}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;