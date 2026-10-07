import { SocialLinks } from './UI'
export default function Footer() {
  return (
    <footer className="section-shell footer">
      <div>
        <strong>Nithushan Uthayarasa</strong>
        <p>AI/ML Undergraduate</p>
      </div>
      <SocialLinks />
      <p>© {new Date().getFullYear()} Nithushan Uthayarasa</p>
    </footer>
  )
}
