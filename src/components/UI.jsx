import { ArrowUpRight, GitBranch, BriefcaseBusiness } from 'lucide-react'
import { profile } from '../data/profile'
export function SectionHeading({ label, title, children }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{label}</p>
        <h2>{title}</h2>
      </div>
      {children && <p className="section-intro">{children}</p>}
    </div>
  )
}
export function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
export function SocialLinks() {
  return (
    <div className="social-links">
      <a href={profile.github} target="_blank" rel="noreferrer">
        <GitBranch size={16} />
        GitHub
        <ArrowUpRight size={14} />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noreferrer">
        <BriefcaseBusiness size={16} />
        LinkedIn
        <ArrowUpRight size={14} />
      </a>
    </div>
  )
}
