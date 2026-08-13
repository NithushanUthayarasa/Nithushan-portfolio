import { motion } from 'framer-motion'
import { ArrowDown, Bot, BrainCircuit, Cpu, Sparkles } from 'lucide-react'

const steps = [
  { title: 'Machine Learning', icon: BrainCircuit },
  { title: 'Deep Learning', icon: Cpu },
  { title: 'AI-Powered Applications', icon: Bot },
  { title: 'AI + Full-Stack Engineering', icon: Sparkles },
]

function Journey() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">AI / ML Journey</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">My learning path in intelligent systems.</h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] sm:p-8">
          <div className="flex flex-col items-center gap-4">
            {steps.map(({ title, icon: Icon }, index) => (
              <div key={title} className="flex w-full flex-col items-center">
                <div className="glass-card flex w-full max-w-lg items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 sm:px-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-base font-medium text-slate-100 sm:text-lg">{title}</span>
                  </div>
                  <span className="text-xs font-medium tracking-[0.2em] text-slate-400 uppercase">Step {index + 1}</span>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center py-2 text-cyan-300">
                    <ArrowDown size={18} />
                  </div>
                )}
              </div>
            ))}

            <div className="flex w-full flex-col items-center pt-2">
              <div className="flex w-full max-w-lg items-center justify-between rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-4 sm:px-5">
                <div>
                  <p className="text-base font-medium text-cyan-200 sm:text-lg">Agentic AI &amp; LLM Systems</p>
                </div>
                <span className="text-xs font-medium tracking-[0.2em] text-cyan-200 uppercase">Now</span>
              </div>
              <div className="flex flex-col items-center py-2 text-cyan-300">
                <ArrowDown size={18} />
              </div>
              <div className="w-full max-w-lg rounded-2xl border border-violet-400/30 bg-violet-500/10 px-4 py-4 text-left sm:px-5">
                <p className="text-base font-medium text-violet-200 sm:text-lg">Exploring agent orchestration, LLM-based applications, tool calling, and workflow-based AI systems using frameworks such as LangGraph.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Journey
