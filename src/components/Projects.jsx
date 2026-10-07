import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { SectionHeading } from './UI'
import { projects } from '../data/projects'
export default function Projects() {
  const [selected, setSelected] = useState(null)
  return (
    <section
      id="projects"
      tabIndex={-1}
      className="section-shell section projects-section"
    >
      <SectionHeading
        label="01 / Selected work"
        title="Applied AI. Built from the ground up."
      >
        From grounded answers to coordinated agents: four projects exploring AI
        in practice.
      </SectionHeading>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            featured={index < 2}
            onViewDetails={() => setSelected(project)}
          />
        ))}
      </div>
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
