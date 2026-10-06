import { motion } from 'framer-motion'

const profileHighlights = [
  'AI/ML Undergraduate',
  '3rd Year',
  'BSc (Hons) Information Technology',
  'AI Specialization',
  '4 Featured Projects',
]

function About() {
  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">About Me</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-[2.7rem] lg:leading-tight">
              AI-focused problem solver with a practical mindset.
            </h2>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-[72px] lg:items-start">
            <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                I am a third-year BSc (Hons) Information Technology undergraduate specializing in Artificial Intelligence at the Sri Lanka Institute of Information Technology (SLIIT).
              </p>
              <p>
                I have hands-on project experience across Machine Learning, Deep Learning, Computer Vision, Retrieval-Augmented Generation (RAG), Large Language Models (LLMs), Agentic AI, AI automation, and Full-stack AI integration.
              </p>
              <p>
                My technical approach focuses on thoroughly understanding problem requirements, building robust retrieval and model pipelines, evaluating performance with quantitative metrics, and deploying production-ready full-stack integrations.
              </p>
              <p>
                My current goal is to obtain an AI/ML Engineering Internship and apply my technical and problem-solving skills to real-world AI systems.
              </p>
            </div>

            <motion.aside
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-[1.75rem] border border-slate-800 bg-slate-900/75 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.25)] lg:mt-5"
            >
              <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
                <p className="text-[10px] font-medium tracking-[0.22em] text-slate-400 uppercase">Profile</p>
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              </div>

              <ul className="space-y-3 text-sm text-slate-200 sm:text-[15px]">
                {profileHighlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 px-3 py-2.5">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
