const areas = [
  {
    title: 'Machine Learning',
    description: 'Developing and evaluating predictive models using real-world datasets.',
    icon: '🤖',
  },
  {
    title: 'Deep Learning',
    description: 'Building neural-network-based solutions for complex AI problems.',
    icon: '🧠',
  },
  {
    title: 'Computer Vision',
    description: 'Developing image classification and visual recognition applications.',
    icon: '👁️',
  },
  {
    title: 'Natural Language Processing',
    description: 'Exploring NLP techniques for intelligent language-based applications.',
    icon: '💬',
  },
  {
    title: 'AI Applications',
    description: 'Integrating AI models into practical software and full-stack applications.',
    icon: '⚡',
  },
]

function FocusCard({ area, index }) {
  return (
    <div
      className="glass-card rounded-3xl border border-slate-800 bg-slate-900/70 p-6 w-full"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <span className="text-3xl">{area.icon}</span>
      <h3 className="mt-4 text-lg font-semibold text-white">{area.title}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{area.description}</p>
    </div>
  )
}

function Focus() {
  return (
    <section id="focus" className="section-shell py-20 sm:py-24">
      <div>
        <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">Expertise</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Areas of Focus</h2>
      </div>

      <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {areas.slice(0, 3).map((area, i) => (
          <FocusCard key={area.title} area={area} index={i} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:w-2/3 lg:mx-auto">
        {areas.slice(3).map((area, i) => (
          <FocusCard key={area.title} area={area} index={i + 3} />
        ))}
      </div>
    </section>
  )
}

export default Focus
