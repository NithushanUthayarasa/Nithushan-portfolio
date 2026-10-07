import { useRef } from 'react'
import { ArrowRight, ArrowUpRight, GitBranch, Check } from 'lucide-react'
import { Tags } from './UI'
export default function ProjectCard({ project, featured, onViewDetails }) {
  const card = useRef(null)
  const frame = useRef(0)
  const resetPointer = () => {
    cancelAnimationFrame(frame.current)
    card.current?.style.removeProperty('--pointer-x')
    card.current?.style.removeProperty('--pointer-y')
    card.current?.style.removeProperty('--tilt-x')
    card.current?.style.removeProperty('--tilt-y')
  }
  const movePointer = (event) => {
    if (
      event.pointerType !== 'mouse' ||
      !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches
    ) return
    const { clientX, clientY, currentTarget } = event
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const bounds = currentTarget.getBoundingClientRect()
      const x = Math.max(0, Math.min(1, (clientX - bounds.left) / bounds.width))
      const y = Math.max(0, Math.min(1, (clientY - bounds.top) / bounds.height))
      currentTarget.style.setProperty('--pointer-x', `${x * 100}%`)
      currentTarget.style.setProperty('--pointer-y', `${y * 100}%`)
      currentTarget.style.setProperty('--tilt-x', `${(0.5 - y) * 2.4}deg`)
      currentTarget.style.setProperty('--tilt-y', `${(x - 0.5) * 2.4}deg`)
    })
  }
  return (
    <article
      ref={card}
      className={'project-card' + (featured ? ' featured' : '')}
      onPointerMove={movePointer}
      onPointerLeave={resetPointer}
    >
      <div className="project-top">
        <p className="eyebrow">{project.category}</p>
        <span className="project-number">0{project.id}</span>
      </div>
      {featured && (
        <div
          className="project-diagram"
          aria-label={project.title + ' architecture overview'}
        >
          {project.flow.map((stage, index) => (
            <div className="flow-stage" key={stage}>
              <span>{stage}</span>
              {index < project.flow.length - 1 && (
                <ArrowRight size={15} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      )}
      <div className="project-body">
        <h3>{project.cardTitle || project.title}</h3>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
        <p className="project-description">{project.description}</p>
        <Tags items={project.cardTags} />
        <p className="project-result">
          <Check size={16} />
          <span>{project.highlight}</span>
        </p>
      </div>
      <div className="project-actions">
        <a
          className="text-link"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitBranch size={16} />
          GitHub
        </a>
        {project.liveDemo && (
          <a
            className="text-link live-link"
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
          >
            Live Application
            <ArrowUpRight size={15} />
          </a>
        )}
        <button
          className="details-button"
          onClick={onViewDetails}
          aria-label={'View details: ' + project.title}
        >
          View Details
          <ArrowRight size={16} />
        </button>
      </div>
    </article>
  )
}
