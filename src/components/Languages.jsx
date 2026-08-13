const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Tamil', level: 'Native' },
]

function Languages() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">Languages</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Communication and bilingual confidence.</h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {languages.map((language) => (
          <div key={language.name} className="glass-card rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
            <p className="text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">Language</p>
            <p className="mt-4 text-2xl font-semibold text-white">{language.name}</p>
            <p className="mt-3 text-base text-cyan-300">{language.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages
