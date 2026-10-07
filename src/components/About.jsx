import { SectionHeading } from './UI'
export default function About() {
  return (
    <section id="about" tabIndex={-1} className="section-shell section">
      <SectionHeading
        label="02 / About"
        title="Curiosity, backed by engineering."
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I’m a third-year BSc (Hons) Information Technology undergraduate
            specializing in Artificial Intelligence at the{' '}
            <strong>
              Sri Lanka Institute of Information Technology (SLIIT).
            </strong>
          </p>
          <p>
            My hands-on work spans Machine Learning, Deep Learning, Computer
            Vision, RAG, LLMs, and Agentic AI. I connect these systems to
            full-stack web and mobile applications.
          </p>
          <p>
            I focus on understanding the problem, building robust retrieval and
            model pipelines, and evaluating them with quantitative metrics. I’m
            seeking an <strong>AI/ML Engineering Internship</strong> to put that
            approach to work on real-world systems.
          </p>
        </div>
        <aside className="profile-summary">
          <p className="eyebrow">At a glance</p>
          <dl>
            <div>
              <dt>Currently</dt>
              <dd>3rd-year AI undergraduate</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>BSc (Hons) Information Technology</dd>
            </div>
            <div>
              <dt>Building</dt>
              <dd>RAG, agentic &amp; full-stack AI systems</dd>
            </div>
            <div>
              <dt>Next chapter</dt>
              <dd>AI/ML Engineering Internship</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
