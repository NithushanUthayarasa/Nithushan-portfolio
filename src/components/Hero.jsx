import { ArrowDown, ArrowUpRight, FileText, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { SocialLinks } from './UI'
export default function Hero() {
  return (
    <section id="home" className="section-shell hero">
      <div className="hero-copy">
        <p className="availability">
          <span />
          Open to AI/ML internships
        </p>
        <p className="hero-name">NITHUSHAN UTHAYARASA</p>
        <p className="role">AI/ML Undergraduate</p>
        <h1>
          Building Intelligent Systems with{' '}
          <span>Machine Learning, RAG &amp; Agentic AI</span>
        </h1>
        <p className="hero-description">
          Artificial Intelligence undergraduate at SLIIT. I build retrieval
          pipelines, intelligent models, and AI automation—and bring them into
          full-stack applications.
        </p>
        <div className="actions hero-actions">
          <a className="button primary" href="#projects">
            Explore projects
            <ArrowDown size={17} />
          </a>
          <a
            className="button"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            <FileText size={17} />
            View Resume
          </a>
          <a className="text-link" href="#contact">
            Let’s connect
            <ArrowUpRight size={17} />
          </a>
        </div>
        <SocialLinks />
      </div>
      <aside className="hero-profile" aria-label="About Nithushan">
        <span className="portrait-label">AI / ML · ENGINEERING</span>
        <div className="portrait-frame">
          <img
            src="/Nithushan.jpeg"
            alt="Nithushan Uthayarasa"
            width="4000"
            height="5000"
            fetchPriority="high"
          />
        </div>
        <div className="portrait-caption">
          <div>
            <strong>From ideas to applied AI.</strong>
            <span>
              <MapPin size={13} />
              Jaffna, Sri Lanka
            </span>
          </div>
        </div>
      </aside>
      <div className="hero-foot">
        <span>RETRIEVAL. REASONING. REAL-WORLD APPLICATIONS.</span>
        <a href="#projects">
          Selected work
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  )
}
