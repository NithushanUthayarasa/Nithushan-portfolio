import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, BrainCircuit, Download, GitBranch, Mail } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-20 lg:pt-24 lg:pb-12 xl:pt-28 xl:pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_25%)]" />

      <div className="grid items-center gap-4 sm:gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="order-1 relative mx-auto w-full max-w-md px-1 lg:order-2"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
          <div className="mb-3 flex justify-center sm:mb-6">
            <div className="relative rounded-full border border-cyan-400/40 bg-slate-900/80 p-2 shadow-[0_0_36px_rgba(34,211,238,0.18)] ring-4 ring-cyan-400/10">
              <img
                src="/Nithushan.jpeg"
                alt="Nithushan Uthayarasa"
                className="aspect-square w-36 rounded-full object-cover object-[center_35%] sm:w-44 lg:w-56"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 mx-auto w-full max-w-2xl text-center lg:order-1 lg:mx-0 lg:text-left"
        >
          <h1 className="text-[2rem] font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            NITHUSHAN UTHAYARASA
          </h1>

          <p className="mt-2 text-base font-medium text-cyan-300 sm:mt-5 sm:text-2xl">
            AI/ML Undergraduate
          </p>

          <h2 className="mt-3 text-lg font-semibold text-slate-100 sm:mt-4 sm:text-3xl">
            Building Intelligent Systems with Machine Learning & AI
          </h2>

          <p className="mx-auto mt-3 max-w-xl px-1 text-sm leading-6 text-slate-300 sm:mt-6 sm:text-lg sm:leading-7 lg:mx-0">
            I&apos;m a third-year BSc (Hons) Information Technology undergraduate specializing in Artificial Intelligence at the Sri Lanka Institute of Information Technology, focused on building practical AI solutions through machine learning, deep learning, computer vision, and intelligent applications.
          </p>

          <div className="hero-actions mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:mt-6 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300 sm:w-auto"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="/CV_Nithushan_Uthayarasa.pdf"
              download
              className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300 sm:w-auto"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="hero-links mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-8 lg:justify-start">
            <a href="https://github.com/NithushanUthayarasa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300">
              <GitBranch size={16} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nithushan-uthayarasa-6a4819377/?isSelfProfile=false" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300">
              <BriefcaseBusiness size={16} />
              LinkedIn
            </a>
            <a href="mailto:uthayarasanithushan103@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300">
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-10 w-full"
      >
        <div className="glass-card relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.8)] sm:p-8">
          <div className="relative mb-6 flex items-center justify-center">
            <p className="text-[10px] font-medium tracking-[0.24em] text-slate-400 uppercase sm:text-xs">Areas of Focus</p>
            <div className="absolute right-0 rounded-full border border-cyan-400/40 bg-cyan-500/10 p-3 text-cyan-300">
              <BrainCircuit size={22} />
            </div>
          </div>

          <div className="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-2xl">🤖</p>
              <p className="mt-3 text-base font-semibold text-cyan-300">Machine Learning</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Developing and evaluating predictive models using real-world datasets.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-2xl">🧠</p>
              <p className="mt-3 text-base font-semibold text-violet-300">Deep Learning</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Building neural-network-based solutions for complex AI problems.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-2xl">👁️</p>
              <p className="mt-3 text-base font-semibold text-emerald-300">Computer Vision</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Developing image classification and visual recognition applications.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-2xl">💬</p>
              <p className="mt-3 text-base font-semibold text-amber-300">Natural Language Processing</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Exploring NLP techniques for intelligent language-based applications.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-2xl">⚡</p>
              <p className="mt-3 text-base font-semibold text-cyan-300">AI Applications</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Integrating AI models into practical software and full-stack applications.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-2xl">🤖</p>
              <p className="mt-3 text-base font-semibold text-pink-300">Agentic AI &amp; Frameworks</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Exploring agentic AI concepts and frameworks for building intelligent, workflow-based applications.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
