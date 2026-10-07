import { skillGroups } from '../data/skills'
import { SectionHeading, Tags } from './UI'
export default function Skills() {
  return (
    <section id="skills" tabIndex={-1} className="section-shell section">
      <SectionHeading
        label="04 / Technical toolkit"
        title="The tools behind the work."
      >
        A practical stack for training models, designing retrieval systems, and
        shipping AI applications.
      </SectionHeading>
      <div className="skills-table">
        {skillGroups.map((group) => (
          <div className="skill-row" key={group.title}>
            <h3>{group.title}</h3>
            <Tags items={group.skills} />
          </div>
        ))}
      </div>
    </section>
  )
}
