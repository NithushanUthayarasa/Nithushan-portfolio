import { motion } from 'framer-motion'
import { Bot, BrainCircuit, Eye, Layers, Sparkles } from 'lucide-react'

const focusAreas = [
  {
    title: 'Machine Learning & Deep Learning',
    description: 'Predictive modeling, classification, model evaluation, and optimization.',
    icon: BrainCircuit,
    color: 'text-cyan-300',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-400/20',
  },
  {
    title: 'Computer Vision',
    description: 'CNN-based image classification, preprocessing, augmentation, and performance analysis.',
    icon: Eye,
    color: 'text-emerald-300',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-400/20',
  },
  {
    title: 'RAG & LLM Systems',
    description: 'Retrieval pipelines, embeddings, vector databases, hybrid search, reranking, and grounded generation.',
    icon: Sparkles,
    color: 'text-amber-300',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-400/20',
  },
  {
    title: 'Agentic AI',
    description: 'LangGraph-based multi-agent workflows, tool execution, validation, and AI-driven automation.',
    icon: Bot,
    color: 'text-pink-300',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-400/20',
  },
  {
    title: 'AI + Full-Stack Engineering',
    description: 'Integrating AI services with APIs, databases, web applications, and mobile systems.',
    icon: Layers,
    color: 'text-violet-300',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-400/20',
  },
]

function Journey() {
  return (
    <section id="focus" className="section-shell py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">AI / ML Focus</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Building practical intelligent systems across modern AI technologies.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map(({ title, description, icon: Icon, color, bgColor, borderColor }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`glass-card flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${borderColor} ${bgColor} ${color}`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-[10px] font-medium tracking-[0.2em] text-slate-400 uppercase">
                    Focus Area
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Journey
