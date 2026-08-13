import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

function ResumeSection() {
  const resumeUrl = '/CV_Nithushan_Uthayarasa.pdf'

  return (
    <section className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-[2rem] border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] sm:p-8"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">Resume</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Interested in my background?</h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            View or download my latest resume to learn more about my education, projects, technical skills, and experience.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition hover:bg-cyan-300"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          CV file: /CV_Nithushan_Uthayarasa.pdf
        </p>
      </motion.div>
    </section>
  )
}

export default ResumeSection
