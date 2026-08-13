import { BriefcaseBusiness, GitBranch, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="section-shell flex flex-col items-center gap-6 py-8 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-lg font-semibold text-white">Nithushan Uthayarasa</p>
          <p className="mt-1 text-sm text-slate-400">AI/ML Undergraduate</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-300 md:justify-start">
          <a href="https://github.com/NithushanUthayarasa" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
            <GitBranch size={16} />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/nithushan-uthayarasa-6a4819377/?isSelfProfile=false" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
            <BriefcaseBusiness size={16} />
            LinkedIn
          </a>
          <a href="mailto:uthayarasanithushan103@gmail.com" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
            <Mail size={16} />
            Email
          </a>
        </div>

        <p className="text-sm text-slate-400">Copyright 2026 Nithushan Uthayarasa</p>
      </div>
    </footer>
  )
}

export default Footer
