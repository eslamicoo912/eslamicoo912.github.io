import React from "react";
import { motion } from "framer-motion";
import { Code2, MonitorDot, Rocket, SquareCode } from "lucide-react";


/* ── Stagger helpers ───────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ── Feature card ──────────────────────────────────────────── */
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: string;       // tailwind text colour
  accentBg: string;     // tailwind bg colour
  accentBorder: string; // tailwind border colour
  num: string;
}

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature }) => (
  <motion.div
    variants={item}
    className="group relative flex flex-col gap-4 p-6 rounded-2xl
               bg-white dark:bg-white/[0.03]
               border border-slate-200/80 dark:border-white/[0.07]
               hover:border-blue-400/40 dark:hover:border-blue-400/25
               shadow-sm hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-black/30
               transition-all duration-500 overflow-hidden"
  >
    {/* Ghost number */}
    <span
      aria-hidden
      className="absolute -bottom-3 -right-1 text-[80px] font-black leading-none
                 select-none pointer-events-none tracking-tighter
                 text-slate-900/[0.03] dark:text-white/[0.04]"
    >
      {feature.num}
    </span>

    {/* Icon */}
    <div
      className={`inline-flex w-11 h-11 rounded-xl items-center justify-center
                  ${feature.accentBg} border ${feature.accentBorder}
                  transition-transform duration-300 group-hover:-translate-y-0.5`}
    >
      <span className={feature.accent}>{feature.icon}</span>
    </div>

    {/* Text */}
    <div>
      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 tracking-tight">
        {feature.title}
      </h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {feature.description}
      </p>
    </div>
  </motion.div>
);

/* ── Section ───────────────────────────────────────────────── */
const About: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices and design patterns.",
      accent: "text-blue-500 dark:text-blue-400",
      accentBg: "bg-blue-500/10",
      accentBorder: "border-blue-500/20",
      num: "01",
    },
    {
      icon: <SquareCode className="w-5 h-5" />,
      title: "API Development",
      description:
        "Building and maintaining RESTful APIs using Node.js and Express.js with scalable architecture.",
      accent: "text-violet-500 dark:text-violet-400",
      accentBg: "bg-violet-500/10",
      accentBorder: "border-violet-500/20",
      num: "02",
    },
    {
      icon: <MonitorDot className="w-5 h-5" />,
      title: "System Design",
      description:
        "Designing scalable and reliable systems using best practices and design patterns such as SOLID principles and design patterns.",
      accent: "text-cyan-500 dark:text-cyan-400",
      accentBg: "bg-cyan-500/10",
      accentBorder: "border-cyan-500/20",
      num: "03",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "CI/CD & Cloud Basics",
      description:
        "Understanding of CI/CD pipelines and DevOps basics such as Docker, AWS, and GitHub Actions.",
      accent: "text-amber-500 dark:text-amber-400",
      accentBg: "bg-amber-500/10",
      accentBorder: "border-amber-500/20",
      num: "04",
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-slate-50 dark:bg-[#0d0f17] overflow-hidden">

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
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] rounded-full bg-blue-400/6 dark:bg-blue-500/8 blur-[100px]" />
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
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-500/60" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-blue-500 dark:text-blue-400">
              Background
            </span>
          </div>

          {/* Two-column: title + bio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                About
                <span className="text-blue-500"> Me</span>
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                Software Engineer with experience building full-stack web applications, with a strong focus on backend development using Node.js. Skilled in designing scalable APIs, implementing authentication systems, and delivering reliable, user-focused features.<br /><br />
                I apply clean code practices, SOLID principles, and design patterns to build maintainable systems. Currently building FreelaXer, a SaaS product for freelancers, focusing on backend architecture and real-world system design.<br /><br />
                Familiar with DevOps fundamentals, including AWS basics, Docker, and CI/CD workflows using GitHub Actions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Feature cards ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;