import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Download, GitBranch, Mail, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (event, href) => {
    event.preventDefault()
    setIsOpen(false)

    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', href)
    }, 250)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <nav className="section-shell flex items-center justify-between gap-3 py-4">
        <a href="#home" className="flex min-w-0 items-center gap-2 text-sm font-semibold tracking-[0.18em] text-slate-100 uppercase sm:gap-3 sm:tracking-[0.22em]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-500/10 text-base text-cyan-300">
            N
          </span>
          <span className="hidden truncate sm:inline">Nithushan</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/NithushanUthayarasa"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="GitHub"
          >
            <GitBranch size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nithushan-uthayarasa-6a4819377/?isSelfProfile=false"
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a
            href="/CV_Nithushan_Uthayarasa.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-500/20"
          >
            Resume
            <ArrowRight size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-800 bg-slate-950 md:hidden"
          >
            <div className="section-shell flex flex-col gap-2.5 py-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="text-center text-sm font-medium text-slate-300 transition hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-center gap-3 pt-1">
                <a href="https://github.com/NithushanUthayarasa" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200">
                  <GitBranch size={18} />
                </a>
                <a href="https://www.linkedin.com/in/nithushan-uthayarasa-6a4819377/?isSelfProfile=false" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200">
                  <BriefcaseBusiness size={18} />
                </a>
                <a href="mailto:uthayarasanithushan103@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-200">
                  <Mail size={18} />
                </a>
                <a href="/CV_Nithushan_Uthayarasa.pdf" download className="ml-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                  Resume
                  <Download size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
