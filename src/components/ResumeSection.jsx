import { ArrowUpRight, Download } from 'lucide-react'
import { profile } from '../data/profile'
export default function ResumeSection() {
  return (
    <section id="resume" className="section-shell resume-section">
      <div className="resume-panel">
        <div>
          <p className="eyebrow">The complete picture</p>
          <h2>My background, in a nutshell.</h2>
          <p>Education, projects, and technical skills—all in one place.</p>
        </div>
        <div className="actions">
          <a
            className="button"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            View Resume
            <ArrowUpRight size={16} />
          </a>
          <a
            className="button primary"
            href={profile.resume}
            download="CV_Nithushan_Uthayarasa.pdf"
          >
            Download Resume
            <Download size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
