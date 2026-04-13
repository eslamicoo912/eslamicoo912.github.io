import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Download } from "lucide-react";
import profile_pic from "../assets/images/profile_pic.png";

/* ── Stagger helpers ───────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Social link ───────────────────────────────────────────── */
const SocialLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
}> = ({ href, label, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group relative flex items-center justify-center w-10 h-10 rounded-xl
               bg-slate-100 dark:bg-white/[0.06]
               border border-slate-200 dark:border-white/10
               text-slate-500 dark:text-slate-400
               hover:text-blue-500 dark:hover:text-blue-400
               hover:border-blue-400/40 dark:hover:border-blue-400/30
               hover:bg-blue-50 dark:hover:bg-blue-500/10
               transition-all duration-300 hover:-translate-y-0.5"
  >
    {children}
  </a>
);

/* ── Component ─────────────────────────────────────────────── */
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#08090e]">
      {/* ── Background: grid texture ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#64748b 1px,transparent 1px),linear-gradient(to right,#64748b 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ambient glows ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-blue-400/8 dark:bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-indigo-400/6 dark:bg-indigo-500/8 blur-[100px]" />
      </div>

      {/* ── Diagonal accent line (decorative) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-px h-full
                   bg-gradient-to-b from-transparent via-blue-500/20 to-transparent
                   hidden lg:block"
        style={{ right: "38%" }}
      />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 w-full container mx-auto px-5 sm:px-8 lg:px-12 max-w-6xl py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center min-h-screen lg:min-h-0 lg:h-screen max-h-[900px]">
          {/* ══ LEFT — copy ══════════════════════════════════════ */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 lg:pr-16"
          >
            {/* Eyebrow */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-6"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-blue-500 dark:text-blue-400">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={item} className="mb-4 relative">
              {/* Ghost text */}
              <span
                aria-hidden
                className="absolute -top-6 -left-1 text-[clamp(72px,14vw,160px)] font-black leading-none
                           select-none pointer-events-none tracking-tighter
                           text-slate-900/[0.04] dark:text-white/[0.04]"
              >
                EA
              </span>
              <h1 className="flex gap-5 relative text-[clamp(40px,7vw,80px)] font-extrabold tracking-tight leading-[1.0] text-slate-900 dark:text-white">
                Eslam
                <br />
                <span className="text-blue-500">Ashraf</span>
              </h1>
            </motion.div>

            {/* Role — typewriter */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-6 bg-slate-300 dark:bg-white/20 flex-shrink-0" />
              <div className="text-base sm:text-lg font-semibold text-slate-500 dark:text-slate-400 tracking-wide">
                <TypeAnimation
                  sequence={[
                    "Full-Stack Developer",
                    2200,
                    "Backend Engineer",
                    2200,
                    "MERN Stack Engineer",
                    2200,
                  ]}
                  repeat={Infinity}
                  speed={40}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mb-9"
            >
              Building beautiful, functional, and scalable web applications with
              a passion for clean code, solid architecture, and thoughtful user
              experience.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-blue-600 hover:bg-blue-700
                           text-white text-sm font-bold
                           shadow-lg shadow-blue-600/25
                           transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                View Projects
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://drive.google.com/drive/u/0/folders/1EBQFUQLBeX650h4FJB8r474YSXnMnVHh"
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                           text-sm font-bold
                           text-slate-700 dark:text-slate-200
                           bg-slate-100 dark:bg-white/[0.06]
                           border border-slate-200 dark:border-white/10
                           hover:border-blue-400/40 hover:bg-blue-50
                           dark:hover:bg-blue-500/10 dark:hover:border-blue-400/30
                           transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </motion.div>

            {/* Socials + divider */}
            <motion.div variants={item} className="flex items-center gap-4">
              <SocialLink href="https://github.com/eslamicoo912" label="GitHub">
                <Github className="w-4 h-4" />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/eslamicoo912/"
                label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </SocialLink>
              <SocialLink href="mailto:eslamicoo3@gmail.com" label="Email">
                <Mail className="w-4 h-4" />
              </SocialLink>
              <div className="h-px flex-1 bg-slate-200 dark:bg-white/[0.07] max-w-[80px]" />
              <span className="text-[11px] tracking-widest uppercase text-slate-400 dark:text-slate-500 font-medium">
                Cairo, EG
              </span>
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — photo ════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="lg:col-span-5 flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px]">
              {/* Outer offset square — decorative frame */}
              <div
                className="absolute -inset-4 rounded-3xl border border-blue-500/20 dark:border-blue-400/15"
                style={{ transform: "rotate(6deg)" }}
              />

              {/* Middle square */}
              <div
                className="absolute -inset-2 rounded-2xl border border-slate-200 dark:border-white/[0.07]"
                style={{ transform: "rotate(-3deg)" }}
              />

              {/* Corner accent marks */}
              {[
                "top-0 left-0 border-t-2 border-l-2 rounded-tl-lg",
                "top-0 right-0 border-t-2 border-r-2 rounded-tr-lg",
                "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-lg",
                "bottom-0 right-0 border-b-2 border-r-2 rounded-br-lg",
              ].map((cls, i) => (
                <span
                  key={i}
                  className={`absolute w-5 h-5 border-blue-500/60 dark:border-blue-400/50 ${cls} z-10`}
                />
              ))}

              {/* Photo */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden
                              ring-1 ring-slate-200 dark:ring-white/[0.08]
                              shadow-2xl shadow-slate-300/50 dark:shadow-black/60"
              >
                <img
                  src={profile_pic}
                  alt="Eslam Ashraf"
                  className="w-full h-full object-cover"
                />
                {/* Subtle inner gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge — experience */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-6 z-20
                           flex items-center gap-2.5 px-4 py-2.5 rounded-2xl
                           bg-white dark:bg-[#0f1119]
                           border border-slate-200 dark:border-white/10
                           shadow-xl shadow-slate-200/60 dark:shadow-black/50"
              >
                <span className="text-2xl leading-none">💻</span>
                <div>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-none mb-0.5">
                    Experience
                  </p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-none">
                    2+ yr MERN
                  </p>
                </div>
              </motion.div>

              {/* Floating badge — stack */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -top-4 -right-6 z-20
                           flex items-center gap-2 px-3.5 py-2 rounded-2xl
                           bg-blue-600 text-white
                           shadow-lg shadow-blue-600/40"
              >
                <span className="text-base leading-none">⚡</span>
                <span className="text-xs font-bold tracking-wide">
                  Full-Stack
                </span>
              </motion.div>

              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden lg:flex"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 dark:text-slate-600 font-medium">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-slate-300 to-transparent dark:from-white/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
