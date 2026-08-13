const skillGroups = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'JavaScript'],
  },
  {
    title: 'AI / Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing (NLP)', 'Computer Vision'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'Spring Boot'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MS SQL'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Postman', 'Jupyter Notebook', 'VS Code', 'IntelliJ IDEA', 'Figma', 'Expo Go'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.25em] text-cyan-300 uppercase">Skills</p>
        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Core tools for AI and intelligent systems.</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <div
            key={group.title}
            className="glass-card rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
