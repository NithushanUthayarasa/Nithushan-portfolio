import { useEffect } from 'react'

// Progressive enhancement: content stays visible if motion or observers are unavailable.
export default function useScrollReveal() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motion.matches || !('IntersectionObserver' in window)) return

    const elements = document.querySelectorAll(
      '.section-heading, .project-card, .focus-card, .skill-row, .about-copy, .profile-summary, .education-panel, .resume-panel, .contact-links',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return
          target.classList.add('reveal-enter')
          observer.unobserve(target)
        })
      },
      { threshold: 0.08 },
    )

    elements.forEach((element) => observer.observe(element))
    const stopMotion = () => {
      if (!motion.matches) return
      observer.disconnect()
      elements.forEach((element) => element.classList.remove('reveal-enter'))
    }
    motion.addEventListener('change', stopMotion)
    return () => {
      observer.disconnect()
      motion.removeEventListener('change', stopMotion)
      elements.forEach((element) => element.classList.remove('reveal-enter'))
    }
  }, [])
}
