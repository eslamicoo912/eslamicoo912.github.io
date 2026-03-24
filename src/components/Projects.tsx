import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Youtube, ArrowUpRight } from "lucide-react";
import queenLogo from "../assets/images/queen.png";
import aiLogo from "../assets/images/ai_assistant.png";
import dentalLogo from "../assets/images/dental.png";

/* ─── Types ─────────────────────────────────────────────────── */
interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  liveUrl: string;
  githubUrl?: string;
  youtubeUrl?: string;
  accent: string;        // tailwind text colour class  e.g. "text-sky-400"
  accentBg: string;      // tailwind bg colour class    e.g. "bg-sky-400/10"
  accentBorder: string;  // tailwind border colour      e.g. "border-sky-400/30"
}

/* ─── Single Card ────────────────────────────────────────────── */
const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const isEven = index % 2 === 0;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="border-2 border-slate-200/70 dark:border-white/[0.06] group relative grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden bg-white dark:bg-[#0d0f17] border border-slate-200/70 dark:border-white/[0.06] shadow-xl shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-slate-300/50 dark:hover:shadow-black/40 transition-shadow duration-700"
    >
      {/* ── Index badge ── */}
      <span
        className={`absolute top-5 ${isEven ? "left-5" : "right-5"
          } z-20 font-mono text-[11px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full backdrop-blur-md bg-white/80 dark:bg-black/50 border ${project.accentBorder} ${project.accent}`}
      >
        {num}
      </span>

      {/* ── Image column ── */}
      <div
        className={`relative lg:col-span-5 h-52 sm:h-64 lg:h-auto overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"
          }`}
      >
        {/* Parallax image */}
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 scale-110 will-change-transform"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay gradient */}
        <div
          className={`absolute inset-0 opacity-40 dark:opacity-60 ${isEven
            ? "bg-gradient-to-r from-transparent to-white dark:to-[#0d0f17]"
            : "bg-gradient-to-l from-transparent to-white dark:to-[#0d0f17]"
            } transition-opacity duration-500 group-hover:opacity-20`}
        />

        {/* Accent corner glow */}
        <div
          className={`absolute bottom-0 ${isEven ? "right-0" : "left-0"
            } w-48 h-48 rounded-full blur-3xl opacity-20 dark:opacity-30 ${project.accentBg} pointer-events-none`}
        />
      </div>

      {/* ── Content column ── */}
      <div
        className={`relative lg:col-span-7 flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-6 lg:py-8 ${isEven ? "lg:order-2" : "lg:order-1"
          }`}
      >
        {/* Large decorative number */}
        <span
          className={`absolute ${isEven ? "-right-4 top-4" : "-left-4 top-4"
            } text-[120px] leading-none font-black select-none pointer-events-none opacity-[0.04] dark:opacity-[0.06] tracking-tighter`}
        >
          {num}
        </span>

        {/* Subtitle pill */}
        <div className="mb-2.5">
          <span
            className={`inline-block text-[10px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full ${project.accentBg} ${project.accent} border ${project.accentBorder}`}
          >
            {project.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Divider */}
        <div
          className={`h-px w-12 mb-3 rounded-full ${project.accentBg.replace(
            "/10",
            ""
          )}`}
        />

        {/* Description */}
        <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-4 max-w-lg">
          {project.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 xs:grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
          {project.features.slice(0, 6).map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i + 0.3, duration: 0.4 }}
              className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300"
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.accentBg.replace(
                  "/10",
                  ""
                )} ${project.accent}`}
              />
              <span className="truncate">{f}</span>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[10px] font-semibold tracking-widest uppercase rounded-lg bg-slate-100 dark:bg-white/[0.05] text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-white/[0.08]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 items-center">
          {/* Primary – Live Demo */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 ${project.accentBg
              .replace("/10", "")
              .replace("bg-", "bg-")
              } ${project.accent.replace("text-", "bg-").replace(/\d+$/, "600")} hover:opacity-90`}
            style={{ background: "var(--accent-solid, #2563eb)" }}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
            <ArrowUpRight className="w-3 h-3 opacity-0 -ml-1 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-200" />
          </a>

          {project.youtubeUrl && (
            <a
              href={project.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <Youtube className="w-3.5 h-3.5" />
              Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

/* ─── Section ────────────────────────────────────────────────── */
const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Easymerch AI Assistant",
      subtitle: "AI-Powered Toolkit",
      description:
        "An AI-orchestrated toolkit empowering creators with batch image processing, prompt engineering, and intelligent background removal.",
      image: aiLogo,
      technologies: ["React", "Tailwind", "Node.js", "MongoDB", "OpenAI API", "Reflex"],
      features: [
        "LLM-powered prompt builder",
        "Intelligent BG removal",
        "Batch visual generation",
        "Professional upscaling",
      ],
      liveUrl: "https://easymerch-ai-assistant.vercel.app/",
      githubUrl: "https://github.com/eslamicoo912/easymerch-ai-assistant-docs",
      youtubeUrl: "https://www.youtube.com/watch?v=ZGP5m7tiV0Y",
      accent: "text-amber-500 dark:text-amber-400",
      accentBg: "bg-amber-500/10",
      accentBorder: "border-amber-500/25",
    },
    {
      title: "Dental Management System",
      subtitle: "Clinic Operations",
      description:
        "Comprehensive healthcare solution that automates the clinic lifecycle—from patient intake and dental charting to proactive follow-ups and analytics.",
      image: dentalLogo,
      technologies: ["React", "Express", "Node.js", "MongoDB", "Tailwind", "TypeScript"],
      features: [
        "Interactive dental charting",
        "Dynamic queue management",
        "Proactive recall system",
        "Revenue analytics dashboard",
        "Inventory tracking",
        "Patient history & records",
      ],
      liveUrl: "",
      youtubeUrl: "https://www.youtube.com/watch?v=at04SHIci6Q&t=3s",
      githubUrl: "https://github.com/eslamicoo912/dental-management-system-doc",
      accent: "text-cyan-500 dark:text-cyan-400",
      accentBg: "bg-cyan-500/10",
      accentBorder: "border-cyan-500/25",
    },
    {
      title: "Queen for Mental Health",
      subtitle: "Healthcare Platform",
      description:
        "A multi-role mental health ecosystem facilitating real-time connection between therapists and patients with an integrated admin control center.",
      image: queenLogo,
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
      features: [
        "Role-based authentication",
        "Real-time patient-therapist chat",
        "Fine-grained admin dashboard",
        "Seamless appointment booking",
        "Push notifications",
        "Secure payment gateway",
      ],
      liveUrl: "https://queenmentalhealth.com/",
      youtubeUrl: "https://youtube.com",
      githubUrl: "https://github.com",
      accent: "text-violet-500 dark:text-violet-400",
      accentBg: "bg-violet-500/10",
      accentBorder: "border-violet-500/25",
    },


  ];

  return (
    <section
      id="projects"
      className="relative py-16 sm:py-24 bg-slate-50 dark:bg-[#080a11] overflow-hidden"
    >
      {/* ── Ambient blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-40 -left-32 w-[600px] h-[600px] rounded-full bg-blue-400/5 dark:bg-blue-600/5 blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-violet-400/5 dark:bg-violet-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-cyan-400/5 dark:bg-cyan-600/5 blur-[100px]" />
      </div>

      {/* ── Subtle grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(to right, #94a3b8 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-blue-500/60" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-blue-500 dark:text-blue-400">
              Engineering Portfolio
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Featured{" "}
              <span className="relative inline-block">
                Projects
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q50 1 100 5 Q150 9 200 4"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xs sm:text-right leading-relaxed">
              Delivering high-performance digital products with modern full-stack technologies.
            </p>
          </div>
        </motion.div>

        {/* ── Cards ── */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* ── Footer CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="h-px flex-1 hidden sm:block bg-slate-200 dark:bg-white/[0.06]" />
          <a
            href="https://github.com/eslamicoo912"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 hover:border-blue-400/50 hover:bg-blue-50 dark:hover:bg-blue-500/10 dark:hover:border-blue-400/30 transition-all duration-300 shadow-sm"
          >
            <Github className="w-4 h-4" />
            View all repositories on GitHub
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
          <div className="h-px flex-1 hidden sm:block bg-slate-200 dark:bg-white/[0.06]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;