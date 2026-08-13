import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, X } from 'lucide-react'

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onClick={(event) => event.stopPropagation()}
          className="h-[min(90vh,760px)] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.8)] sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-[0.24em] text-cyan-300 uppercase">Project Details</p>
              <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">{project.title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
              aria-label="Close details"
            >
              <X size={18} />
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4">
            <p className="text-xs font-medium tracking-[0.2em] text-cyan-300 uppercase">Category</p>
            <p className="mt-2 text-lg font-semibold text-white">{project.category}</p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">Overview</h4>
              <p className="mt-3 text-slate-300">{project.overview}</p>

              <h4 className="mt-6 text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">Problem</h4>
              <p className="mt-3 text-slate-300">{project.problem}</p>

              <h4 className="mt-6 text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">Solution / Approach</h4>
              <p className="mt-3 text-slate-300">{project.solution}</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">Technologies</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-sm text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <h4 className="mt-6 text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">Features</h4>
              <ul className="mt-3 space-y-2 text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <h4 className="text-sm font-semibold tracking-[0.2em] text-slate-300 uppercase">Results / Evaluation</h4>
            <p className="mt-3 text-slate-300">{project.results}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300"
            >
              <GitBranch size={16} />
              GitHub
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300"
              >
                <ArrowUpRight size={16} />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectModal
