import { motion } from 'framer-motion'
import { CalendarRange, GraduationCap, MapPin } from 'lucide-react'

function Education() {
  return (
    <section id="education" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">Education</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Academic foundation in Artificial Intelligence.</h2>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <GraduationCap size={28} />
              </div>
              <div>
                <p className="text-xl font-semibold text-white sm:text-2xl">BSc (Hons) in Information Technology</p>
                <p className="mt-2 text-base text-cyan-300">Specialization in Artificial Intelligence</p>
                <p className="mt-2 text-base text-slate-300">Sri Lanka Institute of Information Technology (SLIIT)</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CalendarRange size={16} className="text-cyan-300" />
                <span>2024–2028</span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-cyan-300">•</span>
                <span>3rd Year Student</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">Academic status</p>
              <p className="mt-2 text-lg font-semibold text-white">3rd Year Student</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <p className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">CGPA</p>
              <p className="mt-2 text-lg font-semibold text-white">3.05 / 4.00</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:col-span-2">
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin size={18} className="text-cyan-300" />
                <span>Malabe, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Education
