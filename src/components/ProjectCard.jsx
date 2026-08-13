import { ExternalLink, GitBranch, Sparkles } from 'lucide-react'

function ProjectCard({ project, featured, onViewDetails }) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] border bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${featured ? 'border-cyan-400/30 xl:col-span-1' : 'border-slate-800'}`}>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400" />

      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-slate-700 bg-slate-950/70 px-2.5 py-1 text-[10px] font-medium tracking-[0.2em] text-slate-300 uppercase">
          {project.category}
        </span>
        {featured && (
          <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium tracking-[0.2em] text-cyan-200 uppercase">
            <Sparkles size={12} />
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="rounded-full border border-slate-700 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-200">
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-4">
        <p className="text-[10px] font-medium tracking-[0.22em] text-cyan-300 uppercase">Key Result</p>
        <p className="mt-2 text-lg font-bold text-cyan-200">{project.highlight}</p>
      </div>

      <div className="mt-6 space-y-3 text-sm text-slate-300">
        {project.achievements.slice(0, 3).map((achievement) => (
          <div key={achievement} className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3.5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300"
        >
          <GitBranch size={16} />
          GitHub
        </a>

        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/80 px-3.5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}

        <button
          type="button"
          onClick={onViewDetails}
          className="ml-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3.5 py-2.5 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
        >
          View Details
        </button>
      </div>
    </article>
  )
}

export default ProjectCard
