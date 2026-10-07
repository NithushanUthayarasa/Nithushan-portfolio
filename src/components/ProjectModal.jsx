import { useEffect, useRef } from 'react'
import { ArrowUpRight, GitBranch, X } from 'lucide-react'
import { Tags } from './UI'
export default function ProjectModal({ project, onClose }) {
  const dialog = useRef(null)
  useEffect(() => {
    const element = dialog.current
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    element.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = overflow
      previous?.focus({ preventScroll: true })
    }
  }, [])
  return (
    <dialog
      ref={dialog}
      className="project-modal"
      aria-labelledby="project-title"
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === dialog.current) {
          const rect = dialog.current.getBoundingClientRect()
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose()
        }
      }}
    >
      <div className="modal-header">
        <p className="eyebrow">Project details / 0{project.id}</p>
        <button
          className="icon-button"
          onClick={onClose}
          aria-label="Close project details"
          autoFocus
        >
          <X size={20} />
        </button>
      </div>
      <div className="modal-content">
        <p className="project-category">{project.category}</p>
        <h2 id="project-title">{project.title}</h2>
        <p className="modal-overview">{project.overview}</p>
        <div className="result-panel">
          <h3>Results &amp; evaluation</h3>
          <p>{project.results}</p>
        </div>
        <h3>Key contributions</h3>
        <ul className="detail-list">
          {project.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>The problem</h3>
        <p>{project.problem}</p>
        <h3>The approach</h3>
        <p>{project.solution}</p>
        <h3>Technical features</h3>
        <ul className="detail-list">
          {project.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>Technologies</h3>
        <Tags items={project.technologies} />
        <div className="actions">
          <a
            className="button"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={17} />
            GitHub
          </a>
          {project.liveDemo && (
            <a
              className="button primary"
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
            >
              Live Application
              <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>
    </dialog>
  )
}
