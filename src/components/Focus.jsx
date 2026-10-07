import { Bot, BrainCircuit, Eye, Layers, ScanSearch } from 'lucide-react'
import { SectionHeading } from './UI'
const areas = [
  [
    BrainCircuit,
    'Machine Learning & Deep Learning',
    'Predictive modeling, classification, neural networks, model evaluation, and optimization.',
  ],
  [
    Eye,
    'Computer Vision',
    'CNN-based image classification, preprocessing, augmentation, and performance analysis.',
  ],
  [
    ScanSearch,
    'RAG & LLM Systems',
    'Embeddings, vector databases, hybrid retrieval, reranking, and grounded generation.',
  ],
  [
    Bot,
    'Agentic AI',
    'LangGraph multi-agent workflows, tool execution, validation, and AI-driven automation.',
  ],
  [
    Layers,
    'AI + Full-Stack Engineering',
    'AI services connected to APIs, databases, web applications, and mobile systems.',
  ],
]
export default function Focus() {
  return (
    <section id="focus" className="section-shell section">
      <SectionHeading
        label="03 / AI & ML focus"
        title="The systems I like to build."
      />
      <div className="focus-grid">
        {areas.map(([Icon, title, description]) => (
          <article className="focus-card" key={title}>
            <Icon size={23} strokeWidth={1.5} />
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
