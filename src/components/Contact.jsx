import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

function Contact() {
  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">Contact</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            I&apos;m currently looking for AI/ML internship opportunities and opportunities to work on practical intelligent systems.
          </p>
        </div>

        <div className="mt-10 max-w-3xl">
          <div className="space-y-4">
            <a href="mailto:uthayarasanithushan103@gmail.com" className="glass-card flex items-start gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 transition hover:border-cyan-400/50 hover:-translate-y-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">Email</p>
                <p className="mt-2 text-base text-white">uthayarasanithushan103@gmail.com</p>
              </div>
            </a>

            <div className="glass-card flex items-start gap-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">Location</p>
                <p className="mt-2 text-base text-white">Jaffna, Sri Lanka</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="https://github.com/NithushanUthayarasa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300">
                GitHub
                <ArrowUpRight size={16} />
              </a>
              <a href="https://www.linkedin.com/in/nithushan-uthayarasa-6a4819377/?isSelfProfile=false" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300">
                LinkedIn
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
