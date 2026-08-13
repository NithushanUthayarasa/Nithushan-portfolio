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
                I&apos;m Nithushan Uthayarasa, a third-year BSc (Hons) Information Technology undergraduate specializing in Artificial Intelligence at the Sri Lanka Institute of Information Technology.
              </p>
              <p>
                I enjoy transforming AI concepts into practical software systems that solve real-world problems. My experience includes developing predictive models, computer vision applications, and AI-powered full-stack systems.
              </p>
              <p>
                I focus on understanding the problem, experimenting with different approaches, evaluating results, and integrating successful models into usable applications.
              </p>
              <p>
                I&apos;m currently seeking an AI/ML internship where I can contribute to real-world projects while continuing to develop my skills in AI/ML engineering.
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
