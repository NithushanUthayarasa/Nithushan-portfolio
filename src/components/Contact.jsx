import { ArrowUpRight, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { SocialLinks } from './UI'
export default function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      className="section-shell section contact-section"
    >
      <div>
        <p className="eyebrow">06 / Let’s connect</p>
        <h2>
          Let’s build something
          <br />
          <span>intelligent.</span>
        </h2>
        <p className="contact-opportunity">
          Open to AI/ML Internship Opportunities
        </p>
        <p>
          I’m looking to contribute to practical intelligent systems, learn with
          a team, and turn ideas into working applications.
        </p>
      </div>
      <div className="contact-links">
        <a className="contact-email" href={'mailto:' + profile.email}>
          <span className="eyebrow">Email me</span>
          <span>
            <span className="email-address">
              {profile.email.split('@')[0]}@<wbr />{profile.email.split('@')[1]}
            </span>
            <ArrowUpRight size={22} />
          </span>
        </a>
        <SocialLinks />
        <p className="location">
          <MapPin size={16} />
          Jaffna, Sri Lanka
        </p>
      </div>
    </section>
  )
}
