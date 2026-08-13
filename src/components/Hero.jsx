import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, BrainCircuit, Download, GitBranch, Mail } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_25%)]" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium tracking-[0.26em] text-cyan-200 uppercase">
            <BrainCircuit size={14} />
            AI / ML Undergraduate
          </p>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            NITHUSHAN UTHAYARASA
          </h1>

          <p className="mt-5 text-xl font-medium text-cyan-300 sm:text-2xl">
            AI/ML Undergraduate
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-slate-100 sm:text-3xl">
            Building Intelligent Systems with Machine Learning & AI
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            I&apos;m a third-year BSc (Hons) Information Technology undergraduate specializing in Artificial Intelligence at the Sri Lanka Institute of Information Technology, focused on building practical AI solutions through machine learning, deep learning, computer vision, and intelligent applications.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
            >
              View My Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="/CV_Nithushan_Uthayarasa.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
          <div className="mb-6 flex justify-center">
            <div className="relative rounded-full border border-cyan-400/30 bg-slate-900/80 p-2 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <img
                src="/Nithushan.jpeg"
                alt="Nithushan Uthayarasa"
                className="h-32 w-32 rounded-full object-cover object-center sm:h-36 sm:w-36 lg:h-40 lg:w-40"
              />
            </div>
          </div>
          <div className="glass-card relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.8)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium tracking-[0.24em] text-slate-400 uppercase">Areas of Focus</p>
              </div>
              <div className="rounded-full border border-cyan-400/40 bg-cyan-500/10 p-3 text-cyan-300">
                <BrainCircuit size={22} />
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-base font-semibold text-cyan-300">Machine Learning</p>
                <p className="mt-1 text-xs leading-6 text-slate-300">Developing and evaluating predictive models using real-world datasets.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-base font-semibold text-violet-300">Deep Learning</p>
                <p className="mt-1 text-xs leading-6 text-slate-300">Building neural-network-based solutions for complex AI problems.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-base font-semibold text-emerald-300">Computer Vision</p>
                <p className="mt-1 text-xs leading-6 text-slate-300">Developing image classification and visual recognition applications.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-base font-semibold text-amber-300">Natural Language Processing</p>
                <p className="mt-1 text-xs leading-6 text-slate-300">Exploring NLP techniques for intelligent language-based applications.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
                <p className="text-base font-semibold text-cyan-300">AI Applications</p>
                <p className="mt-1 text-xs leading-6 text-slate-300">Integrating AI models into practical software and full-stack applications.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
