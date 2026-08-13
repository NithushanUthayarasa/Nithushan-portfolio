import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">Projects</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Applied AI and software projects.</h2>
        </div>

        <a href="#contact" className="hidden items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200 md:inline-flex">
          Let&apos;s connect
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} featured={index < 3} onViewDetails={() => setSelectedProject(project)} />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

export default Projects
