import { GraduationCap } from 'lucide-react'
import { SectionHeading } from './UI'
export default function Education() {
  return (
    <section id="education" tabIndex={-1} className="section-shell section">
      <SectionHeading label="05 / Education" title="A foundation in AI." />
      <div className="education-panel">
        <div className="education-icon">
          <GraduationCap size={29} />
        </div>
        <div className="education-copy">
          <p className="eyebrow">
            Sri Lanka Institute of Information Technology
          </p>
          <h3>BSc (Hons) in Information Technology</h3>
          <p className="accent">Specialization in Artificial Intelligence</p>
          <p>SLIIT · Malabe, Sri Lanka</p>
        </div>
        <dl className="education-facts">
          <div>
            <dt>Duration</dt>
            <dd>2024–2028</dd>
          </div>
          <div>
            <dt>Current year</dt>
            <dd>3rd Year</dd>
          </div>
          <div>
            <dt>CGPA</dt>
            <dd>3.05 / 4.00</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
